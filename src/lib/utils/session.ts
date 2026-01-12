import { cookies } from 'next/headers';

const CLEANER_SESSION_COOKIE = 'cleaner_session';
const CLEANER_SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

/**
 * Set cleaner session cookie
 */
export async function setCleanerSession(cleanerId: string) {
  const cookieStore = await cookies();
  cookieStore.set(CLEANER_SESSION_COOKIE, cleanerId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: CLEANER_SESSION_MAX_AGE,
    path: '/',
  });
}

/**
 * Get cleaner session from cookie
 */
export async function getCleanerSession(): Promise<string | null> {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(CLEANER_SESSION_COOKIE);
  return sessionCookie?.value || null;
}

/**
 * Clear cleaner session cookie
 */
export async function clearCleanerSession() {
  const cookieStore = await cookies();
  cookieStore.delete(CLEANER_SESSION_COOKIE);
}
