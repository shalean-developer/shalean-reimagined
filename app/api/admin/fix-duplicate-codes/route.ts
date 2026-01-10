import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * POST /api/admin/fix-duplicate-codes
 * Find and fix duplicate referral codes
 * 
 * This endpoint identifies profiles with duplicate referral codes and generates new unique codes
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Find all profiles with duplicate referral codes
    const { data: allProfiles, error: fetchError } = await supabase
      .from('profiles')
      .select('email, referral_code, created_at')
      .not('referral_code', 'is', null)
      .order('created_at', { ascending: true });

    if (fetchError) {
      return NextResponse.json(
        { error: 'Failed to fetch profiles', details: fetchError.message },
        { status: 500 }
      );
    }

    // Group by referral code to find duplicates
    const codeMap = new Map<string, any[]>();
    allProfiles?.forEach(profile => {
      if (profile.referral_code) {
        const code = profile.referral_code.toUpperCase();
        if (!codeMap.has(code)) {
          codeMap.set(code, []);
        }
        codeMap.get(code)!.push(profile);
      }
    });

    // Find duplicates (codes with more than one profile)
    const duplicates: { code: string; profiles: any[] }[] = [];
    codeMap.forEach((profiles, code) => {
      if (profiles.length > 1) {
        duplicates.push({ code, profiles });
      }
    });

    if (duplicates.length === 0) {
      return NextResponse.json({
        success: true,
        message: 'No duplicate referral codes found',
        duplicates: [],
        fixed: [],
      });
    }

    const fixes = [];

    // Fix each duplicate (keep the first one, regenerate codes for others)
    for (const duplicate of duplicates) {
      // Sort by created_at to keep the oldest one
      const sorted = duplicate.profiles.sort((a, b) => 
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );

      // Keep the first one, fix the rest
      for (let i = 1; i < sorted.length; i++) {
        const profile = sorted[i];
        let newCode: string;
        let attempts = 0;
        const maxAttempts = 100;

        // Generate a new unique code
        do {
          // Generate 6-character alphanumeric code
          newCode = Math.random().toString(36).substring(2, 8).toUpperCase();
          
          // Check if it exists
          const { data: existing } = await supabase
            .from('profiles')
            .select('email')
            .eq('referral_code', newCode)
            .maybeSingle();

          if (!existing) {
            break; // Code is unique
          }
          
          attempts++;
          if (attempts >= maxAttempts) {
            // Fallback: add timestamp to ensure uniqueness
            newCode = newCode + Date.now().toString(36).substring(0, 4).toUpperCase();
            break;
          }
        } while (attempts < maxAttempts);

        // First, set the referral code to NULL to avoid constraint violation
        // Then update with the new code
        const { error: nullError } = await supabase
          .from('profiles')
          .update({
            referral_code: null,
            updated_at: new Date().toISOString(),
          })
          .eq('email', profile.email)
          .eq('referral_code', duplicate.code);

        if (nullError) {
          fixes.push({
            email: profile.email,
            oldCode: duplicate.code,
            newCode: null,
            success: false,
            error: `Failed to clear old code: ${nullError.message}`,
          });
          continue;
        }

        // Now update with the new unique code
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            referral_code: newCode,
            updated_at: new Date().toISOString(),
          })
          .eq('email', profile.email)
          .is('referral_code', null);

        if (updateError) {
          fixes.push({
            email: profile.email,
            oldCode: duplicate.code,
            newCode: null,
            success: false,
            error: updateError.message,
          });
        } else {
          fixes.push({
            email: profile.email,
            oldCode: duplicate.code,
            newCode: newCode,
            success: true,
          });
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: `Found ${duplicates.length} duplicate code(s), fixed ${fixes.filter(f => f.success).length} profile(s)`,
      duplicates: duplicates.map(d => ({
        code: d.code,
        count: d.profiles.length,
        profiles: d.profiles.map(p => ({ email: p.email, created_at: p.created_at })),
      })),
      fixed: fixes,
    });
  } catch (error) {
    console.error('Error fixing duplicate codes:', error);
    return NextResponse.json(
      {
        error: 'Failed to fix duplicate codes',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/admin/fix-duplicate-codes
 * Check for duplicate referral codes without fixing them
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();

    // Find all profiles with referral codes
    const { data: allProfiles, error: fetchError } = await supabase
      .from('profiles')
      .select('email, referral_code, created_at')
      .not('referral_code', 'is', null)
      .order('created_at', { ascending: true });

    if (fetchError) {
      return NextResponse.json(
        { error: 'Failed to fetch profiles', details: fetchError.message },
        { status: 500 }
      );
    }

    // Group by referral code to find duplicates
    const codeMap = new Map<string, any[]>();
    allProfiles?.forEach(profile => {
      if (profile.referral_code) {
        const code = profile.referral_code.toUpperCase();
        if (!codeMap.has(code)) {
          codeMap.set(code, []);
        }
        codeMap.get(code)!.push(profile);
      }
    });

    // Find duplicates
    const duplicates: { code: string; profiles: any[] }[] = [];
    codeMap.forEach((profiles, code) => {
      if (profiles.length > 1) {
        duplicates.push({ code, profiles });
      }
    });

    return NextResponse.json({
      success: true,
      duplicateCount: duplicates.length,
      duplicates: duplicates.map(d => ({
        code: d.code,
        count: d.profiles.length,
        profiles: d.profiles.map(p => ({ 
          email: p.email, 
          created_at: p.created_at,
          referral_code: p.referral_code,
        })),
      })),
    });
  } catch (error) {
    console.error('Error checking duplicate codes:', error);
    return NextResponse.json(
      {
        error: 'Failed to check duplicate codes',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

