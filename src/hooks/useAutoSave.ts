'use client';

import { useEffect, useRef, useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { saveQuoteDraft } from '../../app/booking/quote/actions';
import { QuoteFormData } from '@/types/quote';
import { toast } from 'sonner';

interface UseAutoSaveOptions {
  email: string;
  formData: QuoteFormData;
  enabled?: boolean;
  debounceMs?: number;
  onSaveSuccess?: () => void;
  onSaveError?: (error: string) => void;
}

export function useAutoSave({
  email,
  formData,
  enabled = true,
  debounceMs = 1500,
  onSaveSuccess,
  onSaveError,
}: UseAutoSaveOptions) {
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSavedDataRef = useRef<string | null>(null);

  const saveMutation = useMutation({
    mutationFn: async (data: { email: string; formData: QuoteFormData }) => {
      return await saveQuoteDraft(data.email, data.formData);
    },
    onSuccess: (result) => {
      if (result.success) {
        lastSavedDataRef.current = JSON.stringify(formData);
        onSaveSuccess?.();
      } else {
        const errorMsg = result.error || 'Failed to save draft';
        onSaveError?.(errorMsg);
        toast.error('Auto-save failed', {
          description: errorMsg,
        });
      }
    },
    onError: (error) => {
      const errorMsg = error instanceof Error ? error.message : 'Failed to save draft';
      onSaveError?.(errorMsg);
      toast.error('Auto-save failed', {
        description: errorMsg,
      });
    },
  });

  const triggerSave = useCallback(() => {
    if (!enabled || !email || !email.trim()) {
      return;
    }

    // Clear existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    // Check if data has actually changed
    const currentDataString = JSON.stringify(formData);
    if (currentDataString === lastSavedDataRef.current) {
      return;
    }

    // Set new timer
    debounceTimerRef.current = setTimeout(() => {
      saveMutation.mutate({ email, formData });
    }, debounceMs);
  }, [email, formData, enabled, debounceMs, saveMutation]);

  // Auto-save when form data changes
  useEffect(() => {
    triggerSave();

    // Cleanup timer on unmount
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [triggerSave]);

  // Manual save function (for immediate saves if needed)
  const saveNow = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    if (enabled && email && email.trim()) {
      saveMutation.mutate({ email, formData });
    }
  }, [email, formData, enabled, saveMutation]);

  return {
    isSaving: saveMutation.isPending,
    isSuccess: saveMutation.isSuccess,
    isError: saveMutation.isError,
    saveNow,
    lastSavedAt: saveMutation.isSuccess ? new Date() : null,
  };
}

