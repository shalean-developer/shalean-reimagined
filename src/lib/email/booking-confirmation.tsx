import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Hr,
} from '@react-email/components';
import React from 'react';

interface BookingConfirmationEmailProps {
  bookingNumber: string;
  customerName: string;
  serviceType: string;
  serviceDate: string;
  serviceTime: string;
  serviceAddress: string;
  subtotal: number;
  serviceFee: number;
  discountAmount?: number;
  totalAmount: number;
  paymentStatus: string;
}

export const BookingConfirmationEmail = ({
  bookingNumber,
  customerName,
  serviceType,
  serviceDate,
  serviceTime,
  serviceAddress,
  subtotal,
  serviceFee,
  discountAmount = 0,
  totalAmount,
  paymentStatus,
}: BookingConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your booking confirmation from Shalean Cleaning Services</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Heading style={h1}>Booking Confirmed!</Heading>
          </Section>

          <Section style={content}>
            <Text style={paragraph}>Dear {customerName},</Text>
            <Text style={paragraph}>
              Thank you for booking with Shalean Cleaning Services! Your booking has been confirmed and payment has been received.
            </Text>

            <Section style={bookingDetails}>
              <Heading style={h2}>Booking Details</Heading>
              
              <Section style={detailRow}>
                <Text style={detailLabel}>Booking Number:</Text>
                <Text style={detailValue}>{bookingNumber}</Text>
              </Section>

              <Section style={detailRow}>
                <Text style={detailLabel}>Service Type:</Text>
                <Text style={detailValue}>{serviceType}</Text>
              </Section>

              <Section style={detailRow}>
                <Text style={detailLabel}>Service Date:</Text>
                <Text style={detailValue}>{serviceDate}</Text>
              </Section>

              <Section style={detailRow}>
                <Text style={detailLabel}>Service Time:</Text>
                <Text style={detailValue}>{serviceTime}</Text>
              </Section>

              <Section style={detailRow}>
                <Text style={detailLabel}>Service Address:</Text>
                <Text style={detailValue}>{serviceAddress}</Text>
              </Section>
            </Section>

            <Section style={paymentSection}>
              <Heading style={h2}>Payment Summary</Heading>
              
              <Section style={detailRow}>
                <Text style={detailLabel}>Subtotal:</Text>
                <Text style={detailValue}>R{subtotal.toFixed(2)}</Text>
              </Section>

              {discountAmount > 0 && (
                <Section style={detailRow}>
                  <Text style={detailLabel}>Discount:</Text>
                  <Text style={{ ...detailValue, color: '#16a34a' }}>-R{discountAmount.toFixed(2)}</Text>
                </Section>
              )}

              <Section style={detailRow}>
                <Text style={detailLabel}>Service Fee:</Text>
                <Text style={detailValue}>R{serviceFee.toFixed(2)}</Text>
              </Section>

              <Hr style={hr} />

              <Section style={detailRow}>
                <Text style={{ ...detailLabel, fontWeight: 'bold', fontSize: '18px' }}>Total Paid:</Text>
                <Text style={{ ...detailValue, fontWeight: 'bold', fontSize: '18px', color: '#3b82f6' }}>
                  R{totalAmount.toFixed(2)}
                </Text>
              </Section>

              <Text style={{ ...detailLabel, fontSize: '12px', marginTop: '8px' }}>
                Payment Status: {paymentStatus}
              </Text>
            </Section>

            <Section style={footerSection}>
              <Text style={paragraph}>
                Our team will arrive at the scheduled time. If you have any questions or need to make changes to your booking, please contact us at{' '}
                <Link href="mailto:info@shalean.co.za" style={link}>
                  info@shalean.co.za
                </Link>{' '}
                or call{' '}
                <Link href="tel:+27871535250" style={link}>
                  (+27) 87 153 5250
                </Link>
                .
              </Text>
              
              <Text style={paragraph}>
                Thank you for choosing Shalean Cleaning Services!
              </Text>
            </Section>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} Shalean Cleaning Services. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  padding: '32px 24px',
  backgroundColor: '#3b82f6',
  color: '#ffffff',
  textAlign: 'center' as const,
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '0',
  textAlign: 'center' as const,
};

const h2 = {
  color: '#1a1a1a',
  fontSize: '18px',
  fontWeight: 'bold',
  margin: '16px 0 12px',
};

const content = {
  padding: '24px',
};

const paragraph = {
  color: '#333333',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
  margin: '0 0 16px',
};

const bookingDetails = {
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const paymentSection = {
  backgroundColor: '#f0f9ff',
  borderRadius: '8px',
  padding: '20px',
  margin: '24px 0',
};

const detailRow = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '12px',
};

const detailLabel = {
  color: '#666666',
  fontSize: '14px',
  fontWeight: '500',
};

const detailValue = {
  color: '#1a1a1a',
  fontSize: '14px',
  fontWeight: '600',
  textAlign: 'right' as const,
};

const hr = {
  borderColor: '#e5e7eb',
  margin: '16px 0',
};

const link = {
  color: '#3b82f6',
  textDecoration: 'underline',
};

const footerSection = {
  marginTop: '32px',
  paddingTop: '24px',
  borderTop: '1px solid #e5e7eb',
};

const footer = {
  padding: '24px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e5e7eb',
};

const footerText = {
  color: '#666666',
  fontSize: '12px',
  margin: '0',
};

export default BookingConfirmationEmail;

