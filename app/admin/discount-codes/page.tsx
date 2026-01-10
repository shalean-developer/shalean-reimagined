'use client';

import { useState, useEffect } from 'react';
import { DiscountCodeForm } from './components/DiscountCodeForm';
import { DiscountCodeTable } from './components/DiscountCodeTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { DiscountCode } from '@/types/booking';

export default function DiscountCodesAdminPage() {
  const [discountCodes, setDiscountCodes] = useState<DiscountCode[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCode, setEditingCode] = useState<DiscountCode | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const fetchDiscountCodes = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/discount-codes?limit=100');
      if (!response.ok) {
        throw new Error('Failed to fetch discount codes');
      }
      const result = await response.json();
      setDiscountCodes(result.data || []);
    } catch (error) {
      console.error('Error fetching discount codes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiscountCodes();
  }, [refreshKey]);

  const handleCreate = () => {
    setEditingCode(null);
    setShowForm(true);
  };

  const handleEdit = (code: DiscountCode) => {
    setEditingCode(code);
    setShowForm(true);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingCode(null);
    setRefreshKey((prev) => prev + 1);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this discount code?')) {
      return;
    }

    try {
      const response = await fetch(`/api/discount-codes/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete discount code');
      }

      setRefreshKey((prev) => prev + 1);
    } catch (error) {
      console.error('Error deleting discount code:', error);
      alert(error instanceof Error ? error.message : 'Failed to delete discount code');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Discount Codes</h1>
          <p className="text-muted-foreground mt-1">
            Manage promotional discount codes for your booking system
          </p>
        </div>
        <Button onClick={handleCreate} className="gap-2">
          <Plus className="w-4 h-4" />
          Create Discount Code
        </Button>
      </div>

      {showForm && (
        <DiscountCodeForm
          code={editingCode}
          onClose={handleFormClose}
          onSuccess={handleFormClose}
        />
      )}

      <DiscountCodeTable
        codes={discountCodes}
        loading={loading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

