-- Create notifications table for storing user notifications
CREATE TABLE IF NOT EXISTS notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID, -- For authenticated users (references auth.users or cleaners.id)
  user_email TEXT, -- For users identified by email (customers, admin)
  user_type TEXT NOT NULL CHECK (user_type IN ('admin', 'customer', 'cleaner')),
  type TEXT NOT NULL, -- 'booking_created', 'booking_status_changed', 'payment_received', etc.
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  data JSONB DEFAULT '{}'::jsonb, -- Stores related entity IDs, booking numbers, amounts, etc.
  read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for efficient querying
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON notifications(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_notifications_user_email ON notifications(user_email) WHERE user_email IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_notifications_user_type ON notifications(user_type);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON notifications(read);
CREATE INDEX IF NOT EXISTS idx_notifications_created_at ON notifications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_user_type_read ON notifications(user_type, read, created_at DESC);

-- Composite index for common queries (user lookup with read status)
CREATE INDEX IF NOT EXISTS idx_notifications_user_lookup ON notifications(
  COALESCE(user_id::text, user_email), 
  user_type, 
  read, 
  created_at DESC
);

-- Create a trigger to automatically update updated_at on row updates
CREATE TRIGGER update_notifications_updated_at BEFORE UPDATE ON notifications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Users can only see their own notifications
-- For authenticated users with user_id
CREATE POLICY "Users can view their own notifications by user_id"
  ON notifications FOR SELECT
  USING (
    (user_id IS NOT NULL AND user_id::text = auth.uid()::text)
    OR
    (user_email IS NOT NULL AND user_email = (SELECT email FROM auth.users WHERE id = auth.uid()))
  );

-- RLS Policy: Users can update their own notifications (mark as read)
CREATE POLICY "Users can update their own notifications"
  ON notifications FOR UPDATE
  USING (
    (user_id IS NOT NULL AND user_id::text = auth.uid()::text)
    OR
    (user_email IS NOT NULL AND user_email = (SELECT email FROM auth.users WHERE id = auth.uid()))
  );

-- RLS Policy: Service role can insert notifications (for system-generated notifications)
CREATE POLICY "Service role can insert notifications"
  ON notifications FOR INSERT
  WITH CHECK (true);

-- RLS Policy: Service role can delete notifications
CREATE POLICY "Service role can delete notifications"
  ON notifications FOR DELETE
  USING (true);

-- Note: For admin users, we'll need to handle access differently since they may not have user_id
-- Admin notifications will be identified by email pattern matching in the application layer
