'use client';

import { DiscountCode } from '@/types/booking';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Pencil, Trash2, Loader2 } from 'lucide-react';
import { format } from 'date-fns';

interface DiscountCodeTableProps {
  codes: DiscountCode[];
  loading: boolean;
  onEdit: (code: DiscountCode) => void;
  onDelete: (id: string) => void;
}

export function DiscountCodeTable({
  codes,
  loading,
  onEdit,
  onDelete,
}: DiscountCodeTableProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (codes.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/50 rounded-lg">
        <p className="text-muted-foreground">No discount codes found.</p>
        <p className="text-sm text-muted-foreground mt-2">
          Create your first discount code to get started.
        </p>
      </div>
    );
  }

  const formatDiscountValue = (code: DiscountCode) => {
    if (code.discount_type === 'percentage') {
      return `${code.discount_value}%`;
    }
    return `R${code.discount_value.toFixed(2)}`;
  };

  const isExpired = (code: DiscountCode) => {
    const now = new Date();
    const validUntil = new Date(code.valid_until);
    return validUntil < now;
  };

  const isMaxedOut = (code: DiscountCode) => {
    return code.max_uses !== null && code.used_count >= code.max_uses;
  };

  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Value</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Valid From</TableHead>
            <TableHead>Valid Until</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {codes.map((code) => {
            const expired = isExpired(code);
            const maxedOut = isMaxedOut(code);
            const inactive = !code.is_active;

            return (
              <TableRow key={code.id}>
                <TableCell className="font-mono font-medium">
                  {code.code}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">
                    {code.discount_type === 'percentage' ? 'Percentage' : 'Fixed'}
                  </Badge>
                </TableCell>
                <TableCell className="font-medium">
                  {formatDiscountValue(code)}
                  {code.max_discount_amount && code.discount_type === 'percentage' && (
                    <span className="text-xs text-muted-foreground ml-1">
                      (max R{code.max_discount_amount.toFixed(2)})
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {inactive ? (
                      <Badge variant="secondary">Inactive</Badge>
                    ) : expired ? (
                      <Badge variant="destructive">Expired</Badge>
                    ) : maxedOut ? (
                      <Badge variant="secondary">Maxed Out</Badge>
                    ) : (
                      <Badge variant="default">Active</Badge>
                    )}
                    {code.min_purchase_amount && (
                      <span className="text-xs text-muted-foreground">
                        Min: R{code.min_purchase_amount.toFixed(2)}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {code.used_count} / {code.max_uses || '∞'}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {format(new Date(code.valid_from), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {format(new Date(code.valid_until), 'MMM dd, yyyy')}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onEdit(code)}
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDelete(code.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

