/**
 * Paystack API client
 */

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
const PAYSTACK_API_URL = 'https://api.paystack.co';

export interface PaystackInitializeResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
  };
}

export interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data: {
    id: number;
    domain: string;
    status: string;
    reference: string;
    amount: number;
    message: string | null;
    gateway_response: string;
    paid_at: string | null;
    created_at: string;
    channel: string;
    currency: string;
    ip_address: string;
    metadata: {
      booking_id?: string;
      customer_email?: string;
      custom_fields?: Array<{ display_name: string; variable_name: string; value: string }>;
    };
    log: any;
    fees: number;
    fees_split: any;
    authorization: any;
    customer: any;
    plan: any;
    split: any;
    order_id: any;
    paidAt: string | null;
    createdAt: string;
    requested_amount: number;
    pos_transaction_data: any;
    source: any;
    fees_breakdown: any;
  };
}

/**
 * Initialize a Paystack transaction
 */
export async function initializePayment(
  email: string,
  amount: number, // Amount in kobo (Nigerian Naira) or cents. For ZAR, convert to cents (amount * 100)
  reference: string,
  metadata?: {
    booking_id?: string;
    [key: string]: any;
  }
): Promise<PaystackInitializeResponse> {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error('Paystack secret key is not configured');
  }

  // Convert ZAR amount to kobo/cents (multiply by 100)
  const amountInKobo = Math.round(amount * 100);

  // Build callback URL for payment success page
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const callbackUrl = `${appUrl}/payment/success?reference=${reference}`;

  const response = await fetch(`${PAYSTACK_API_URL}/transaction/initialize`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      amount: amountInKobo,
      reference,
      metadata,
      currency: 'ZAR', // South African Rand
      callback_url: callbackUrl,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to initialize payment');
  }

  return response.json();
}

/**
 * Verify a Paystack transaction
 */
export async function verifyPayment(reference: string): Promise<PaystackVerifyResponse> {
  if (!PAYSTACK_SECRET_KEY) {
    throw new Error('Paystack secret key is not configured');
  }

  const response = await fetch(`${PAYSTACK_API_URL}/transaction/verify/${reference}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${PAYSTACK_SECRET_KEY}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to verify payment');
  }

  return response.json();
}

/**
 * Verify Paystack webhook signature
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string
): boolean {
  const crypto = require('crypto');
  const secret = process.env.PAYSTACK_WEBHOOK_SECRET || PAYSTACK_SECRET_KEY || '';
  
  if (!secret) {
    return false;
  }

  const hash = crypto
    .createHmac('sha512', secret)
    .update(payload)
    .digest('hex');

  return hash === signature;
}

/**
 * Get Paystack public key for client-side use
 */
export function getPaystackPublicKey(): string {
  if (!PAYSTACK_PUBLIC_KEY) {
    throw new Error('Paystack public key is not configured');
  }
  return PAYSTACK_PUBLIC_KEY;
}

