import { pbkdf2, randomBytes } from 'crypto';
import { promisify } from 'util';

const pbkdf2Async = promisify(pbkdf2);

/**
 * Hash a password using PBKDF2
 * Uses 100,000 iterations, SHA-256, and a 32-byte salt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(32).toString('hex');
  const iterations = 100000;
  const keyLength = 64;
  const digest = 'sha256';

  const hash = await pbkdf2Async(password, salt, iterations, keyLength, digest);
  const hashHex = hash.toString('hex');

  // Store as: iterations:salt:hash
  return `${iterations}:${salt}:${hashHex}`;
}

/**
 * Verify a password against a stored hash
 */
export async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  try {
    const [iterations, salt, hashHex] = storedHash.split(':');

    if (!iterations || !salt || !hashHex) {
      return false;
    }

    const keyLength = 64;
    const digest = 'sha256';

    const hash = await pbkdf2Async(
      password,
      salt,
      parseInt(iterations, 10),
      keyLength,
      digest
    );

    const computedHash = hash.toString('hex');
    return computedHash === hashHex;
  } catch (error) {
    console.error('Error verifying password:', error);
    return false;
  }
}
