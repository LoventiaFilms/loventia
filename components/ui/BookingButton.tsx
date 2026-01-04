'use client';

import { cn } from '@/lib/utils';

interface BookingButtonProps {
  variant?: 'default' | 'compact' | 'hero';
  className?: string;
  children?: React.ReactNode;
}

export function BookingButton({
  variant = 'default',
  className,
  children
}: BookingButtonProps) {
  const scrollToCalendly = () => {
    const calendlySection = document.querySelector('#calendrier');
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (variant === 'compact') {
    return (
      <button
        onClick={scrollToCalendly}
        className={cn(
          'inline-flex items-center justify-center px-5 py-2.5',
          'bg-loventia-rose text-white text-sm font-medium',
          'rounded-full transition-all duration-300',
          'hover:bg-loventia-rose-dark hover:shadow-lg',
          className
        )}
      >
        {children || 'Réserver'}
      </button>
    );
  }

  if (variant === 'hero') {
    return (
      <button
        onClick={scrollToCalendly}
        className={cn(
          'group relative inline-flex items-center justify-center gap-3',
          'px-10 py-5 bg-loventia-rose text-white',
          'font-sans font-semibold text-lg',
          'rounded-full transition-all duration-500',
          'hover:bg-loventia-rose-dark hover:shadow-card-hover',
          'hover:-translate-y-1 active:translate-y-0',
          className
        )}
      >
        {/* Subtle glow effect */}
        <span className="absolute inset-0 rounded-full bg-loventia-rose/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <span className="relative z-10 flex items-center gap-3">
          {children || 'Réservez votre date'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </button>
    );
  }

  // Default variant
  return (
    <button
      onClick={scrollToCalendly}
      className={cn(
        'group relative inline-flex items-center justify-center gap-4',
        'px-8 py-4 bg-loventia-rose text-white',
        'font-sans font-semibold rounded-full',
        'transition-all duration-300',
        'hover:bg-loventia-rose-dark hover:shadow-card-hover',
        'hover:-translate-y-0.5 active:translate-y-0',
        className
      )}
    >
      {/* Pulse indicator */}
      <span className="relative flex h-3 w-3">
        <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>

      <span>{children || 'Réserver ma date'}</span>
    </button>
  );
}