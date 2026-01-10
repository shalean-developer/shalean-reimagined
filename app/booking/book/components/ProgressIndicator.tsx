'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface ProgressIndicatorProps {
  currentStep: number;
  serviceSlug?: string | null;
  onStepClick?: (step: number, url: string) => void;
  isStepCompleted?: (step: number) => boolean;
}

export function ProgressIndicator({ currentStep, serviceSlug, onStepClick, isStepCompleted }: ProgressIndicatorProps) {
  const router = useRouter();
  
  const getStepUrl = (step: number): string => {
    const baseUrls = {
      1: '/booking/details',
      2: '/booking/worker',
      3: '/booking/submit',
    };
    const baseUrl = baseUrls[step as keyof typeof baseUrls] || '/booking/details';
    return serviceSlug ? `${baseUrl}/${serviceSlug}` : baseUrl;
  };

  const steps = [
    { number: 1, label: 'Details', url: getStepUrl(1) },
    { number: 2, label: 'Worker', url: getStepUrl(2) },
    { number: 3, label: 'Submit', url: getStepUrl(3) },
  ];

  const handleStepClick = (step: number, url: string) => {
    // Allow clicking on current step or completed steps (backward navigation)
    // Prevent clicking on future incomplete steps
    if (step <= currentStep || (isStepCompleted && isStepCompleted(step))) {
      if (onStepClick) {
        onStepClick(step, url);
      } else {
        router.push(url);
      }
    }
  };

  const isStepClickable = (step: number) => {
    return step <= currentStep || (isStepCompleted && isStepCompleted(step));
  };

  return (
    <>
      {/* Desktop Progress Indicator */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <div className="flex items-center justify-between relative w-[400px]">
          {/* Continuous line - connects between circles */}
          <div className="absolute left-4 right-4 top-4 h-0.5 bg-border z-0"></div>
          
          {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep || (isStepCompleted && isStepCompleted(step.number));
            const isClickable = isStepClickable(step.number);
            
            return (
              <div
                key={step.number}
                className={cn(
                  "flex flex-col items-center gap-2 relative z-10",
                  step.number === 2 && "absolute left-1/2 -translate-x-1/2",
                  isClickable && "cursor-pointer hover:opacity-80 transition-opacity",
                  !isClickable && "cursor-not-allowed"
                )}
                onClick={() => isClickable && handleStepClick(step.number, step.url)}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center text-sm font-semibold transition-colors",
                    isActive && "bg-primary border-primary text-primary-foreground",
                    isCompleted && !isActive && "bg-muted border border-border text-muted-foreground",
                    !isActive && !isCompleted && "bg-muted border border-border text-foreground"
                  )}
                >
                  {step.number}
                </div>
                <span
                  className={cn(
                    "text-sm font-medium whitespace-nowrap transition-colors",
                    isActive && "text-primary font-semibold",
                    isCompleted && !isActive && "text-muted-foreground",
                    !isActive && !isCompleted && "text-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Progress Indicator */}
      <div className="md:hidden flex items-center justify-center flex-1">
        <div className="flex items-center justify-between relative w-[200px]">
          {/* Continuous line - connects between circles */}
          <div className="absolute left-3 right-3 top-3 h-0.5 bg-border z-0"></div>
          
          {steps.map((step) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep || (isStepCompleted && isStepCompleted(step.number));
            const isClickable = isStepClickable(step.number);
            
            return (
              <div
                key={step.number}
                className={cn(
                  "flex flex-col items-center gap-1 relative z-10",
                  step.number === 2 && "absolute left-1/2 -translate-x-1/2",
                  isClickable && "cursor-pointer hover:opacity-80 transition-opacity",
                  !isClickable && "cursor-not-allowed"
                )}
                onClick={() => isClickable && handleStepClick(step.number, step.url)}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-semibold transition-colors",
                    isActive && "bg-primary border-primary text-primary-foreground",
                    isCompleted && !isActive && "bg-muted border border-border text-muted-foreground",
                    !isActive && !isCompleted && "bg-muted border border-border text-foreground"
                  )}
                >
                  {step.number}
                </div>
                <span
                  className={cn(
                    "text-xs font-medium whitespace-nowrap transition-colors",
                    isActive && "text-primary font-semibold",
                    isCompleted && !isActive && "text-muted-foreground",
                    !isActive && !isCompleted && "text-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

