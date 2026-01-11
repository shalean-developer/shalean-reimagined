import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Validate environment variables
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables')
    return NextResponse.next()
  }

  // Store cookies that need to be set
  const cookiesToSet: Array<{ name: string; value: string; options?: any }> = []

  try {
    const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookies) {
          cookies.forEach(({ name, value, options }) => {
            cookiesToSet.push({ name, value, options })
          })
        },
      },
    })

    // Refresh session if expired - required for Server Components
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    // If there's an error getting user, log it but don't block the request
    if (error) {
      console.error('Error getting user in middleware:', error.message)
    }

    // Protect dashboard routes (customer)
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
      if (!user) {
        const url = request.nextUrl.clone()
        url.pathname = '/login'
        url.searchParams.set('redirect', request.nextUrl.pathname)
        // Create redirect response and apply cookies
        const redirectResponse = NextResponse.redirect(url)
        cookiesToSet.forEach(({ name, value, options }) => {
          redirectResponse.cookies.set(name, value, options)
        })
        // Add pathname header even for redirects
        redirectResponse.headers.set('x-pathname', request.nextUrl.pathname)
        return redirectResponse
      }
    }

    // Protect cleaner dashboard routes (but allow /cleaner/login)
    if (request.nextUrl.pathname.startsWith('/cleaner') && !request.nextUrl.pathname.startsWith('/cleaner/login')) {
      if (!user) {
        const url = request.nextUrl.clone()
        url.pathname = '/cleaner/login'
        url.searchParams.set('redirect', request.nextUrl.pathname)
        const redirectResponse = NextResponse.redirect(url)
        cookiesToSet.forEach(({ name, value, options }) => {
          redirectResponse.cookies.set(name, value, options)
        })
        // Add pathname header even for redirects
        redirectResponse.headers.set('x-pathname', request.nextUrl.pathname)
        return redirectResponse
      }

      // Additional check: verify user is a cleaner
      // We'll do a basic check here - full verification happens in layout
      // Check if email matches cleaner format or if user has cleaner profile
      if (user.email && !user.email.includes('@cleaners.shalean.local')) {
        // Allow through - layout will verify cleaner status more thoroughly
        // This is just a basic filter
      }
    }

    // Protect admin dashboard routes (but allow /admin/login and standalone admin pages)
    if (
      request.nextUrl.pathname.startsWith('/admin') &&
      !request.nextUrl.pathname.startsWith('/admin/login') &&
      !request.nextUrl.pathname.startsWith('/admin/create-cleaner') &&
      !request.nextUrl.pathname.startsWith('/admin/discount-codes') &&
      !request.nextUrl.pathname.startsWith('/admin/fix-duplicate-codes') &&
      !request.nextUrl.pathname.startsWith('/admin/fix-referral')
    ) {
      if (!user) {
        const url = request.nextUrl.clone()
        url.pathname = '/admin/login'
        url.searchParams.set('redirect', request.nextUrl.pathname)
        const redirectResponse = NextResponse.redirect(url)
        cookiesToSet.forEach(({ name, value, options }) => {
          redirectResponse.cookies.set(name, value, options)
        })
        // Add pathname header even for redirects
        redirectResponse.headers.set('x-pathname', request.nextUrl.pathname)
        return redirectResponse
      }

      // Additional check: verify user is an admin
      // We'll do a basic check here - full verification happens in layout
      // Check if email matches admin pattern
      if (user.email && !user.email.includes('@admin.shalean.local') && user.user_metadata?.role !== 'admin') {
        // Allow through - layout will verify admin status more thoroughly
        // This is just a basic filter
      }
    }

    // Create response and add pathname header for all requests
    const response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
    
    // Set cookies on the response
    cookiesToSet.forEach(({ name, value, options }) => {
      response.cookies.set(name, value, options)
    })
    
    // Add pathname to headers for use in layouts (always set this)
    response.headers.set('x-pathname', request.nextUrl.pathname)

    return response
  } catch (error) {
    // Log the error but don't crash the middleware
    console.error('Middleware error:', error)
    const errorResponse = NextResponse.next()
    // Still set pathname header even on error
    errorResponse.headers.set('x-pathname', request.nextUrl.pathname)
    return errorResponse
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

