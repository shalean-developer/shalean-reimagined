-- Create bookings table for storing booking information
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_number TEXT NOT NULL UNIQUE,
  customer_first_name TEXT NOT NULL,
  customer_last_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  service_id UUID REFERENCES services(id),
  service_type TEXT NOT NULL,
  bedrooms TEXT NOT NULL,
  bathrooms TEXT NOT NULL,
  additional_services JSONB DEFAULT '[]'::jsonb,
  cleaning_equipment TEXT NOT NULL,
  preferred_cleaner_id UUID, -- References users/cleaners table (assuming it exists)
  cleaning_frequency TEXT NOT NULL DEFAULT 'one-time',
  service_date DATE NOT NULL,
  service_time TIME NOT NULL,
  service_duration INTEGER NOT NULL DEFAULT 3,
  service_address TEXT NOT NULL,
  service_apt_unit TEXT,
  service_suburb TEXT NOT NULL,
  service_city TEXT NOT NULL,
  special_instructions TEXT,
  tip_amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
  base_price DECIMAL(10, 2) NOT NULL,
  additional_services_price DECIMAL(10, 2) NOT NULL DEFAULT 0,
  frequency_discount_percent DECIMAL(5, 2) NOT NULL DEFAULT 0,
  frequency_discount_amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
  subtotal DECIMAL(10, 2) NOT NULL,
  service_fee DECIMAL(10, 2) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  discount_code TEXT,
  discount_amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
  amount_paid DECIMAL(10, 2) NOT NULL DEFAULT 0,
  payment_status TEXT NOT NULL DEFAULT 'pending',
  paystack_reference TEXT,
  paystack_transaction_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  user_id UUID, -- If customer is logged in
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_bookings_booking_number ON bookings(booking_number);
CREATE INDEX IF NOT EXISTS idx_bookings_customer_email ON bookings(customer_email);
CREATE INDEX IF NOT EXISTS idx_bookings_service_date ON bookings(service_date);
CREATE INDEX IF NOT EXISTS idx_bookings_payment_status ON bookings(payment_status);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_bookings_paystack_reference ON bookings(paystack_reference);
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

