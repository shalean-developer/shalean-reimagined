'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FixDuplicateCodesPage() {
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const checkDuplicates = async () => {
    setChecking(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch('/api/admin/fix-duplicate-codes');
      const data = await response.json();

      if (response.ok) {
        setResult({ type: 'check', data });
      } else {
        setError(data.error || 'Failed to check duplicates');
        setResult({ type: 'check', data });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setChecking(false);
    }
  };

  const fixDuplicates = async () => {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const response = await fetch('/api/admin/fix-duplicate-codes', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setResult({ type: 'fix', data });
      } else {
        setError(data.error || 'Failed to fix duplicates');
        setResult({ type: 'fix', data });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Fix Duplicate Referral Codes</CardTitle>
          <CardDescription>
            Find and fix duplicate referral codes. Each referral code should be unique to one user.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={checkDuplicates} disabled={checking} variant="outline">
              {checking ? 'Checking...' : 'Check for Duplicates'}
            </Button>
            <Button onClick={fixDuplicates} disabled={loading || checking}>
              {loading ? 'Fixing...' : 'Fix Duplicates'}
            </Button>
          </div>

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-md">
              <p className="text-sm font-medium text-destructive">Error:</p>
              <p className="text-sm text-destructive/80">{error}</p>
            </div>
          )}

          {result && (
            <div className="space-y-4">
              {result.type === 'check' && result.data.success && (
                <>
                  {result.data.duplicateCount > 0 ? (
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                      <p className="text-sm font-medium text-yellow-800 mb-2">
                        Found {result.data.duplicateCount} duplicate referral code(s)
                      </p>
                      {result.data.duplicates.map((dup: any, idx: number) => (
                        <div key={idx} className="mt-3 p-3 bg-white rounded border border-yellow-300">
                          <p className="text-sm font-semibold">Code: {dup.code}</p>
                          <p className="text-xs text-gray-600">Used by {dup.count} profile(s):</p>
                          <ul className="mt-1 space-y-1">
                            {dup.profiles.map((p: any, pIdx: number) => (
                              <li key={pIdx} className="text-xs">
                                • {p.email} (created: {new Date(p.created_at).toLocaleString()})
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                      <p className="text-sm font-medium text-green-800">
                        ✅ No duplicate referral codes found!
                      </p>
                    </div>
                  )}
                </>
              )}

              {result.type === 'fix' && result.data.success && (
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-sm font-medium text-green-800 mb-2">
                      {result.data.message}
                    </p>
                  </div>

                  {result.data.fixed && result.data.fixed.length > 0 && (
                    <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                      <p className="text-sm font-medium text-blue-800 mb-2">Fixed Profiles:</p>
                      {result.data.fixed.map((fix: any, idx: number) => (
                        <div key={idx} className="mt-2 text-sm">
                          {fix.success ? (
                            <div className="text-green-700">
                              <p>
                                ✅ {fix.email}: {fix.oldCode} → {fix.newCode}
                              </p>
                            </div>
                          ) : (
                            <div className="text-red-700">
                              <p>
                                ❌ {fix.email}: Failed to fix - {fix.error}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {result.data.duplicates && result.data.duplicates.length > 0 && (
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                      <p className="text-sm font-medium mb-2">Duplicate Details:</p>
                      {result.data.duplicates.map((dup: any, idx: number) => (
                        <div key={idx} className="mt-2 text-sm">
                          <p><strong>Code:</strong> {dup.code}</p>
                          <p><strong>Count:</strong> {dup.count}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="p-4 bg-muted rounded-md">
                <p className="text-sm font-medium mb-2">Full Result:</p>
                <pre className="text-xs overflow-auto bg-background p-3 rounded border">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

