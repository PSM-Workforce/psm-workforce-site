import { Link } from 'react-router-dom';
import clsx from 'clsx';

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export default function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      to="/"
      aria-label="PSM Workforce home"
      className={clsx(
        'inline-flex items-center rounded-md bg-white ring-1 ring-black/5 shadow-sm transition-all hover:shadow-md',
        compact ? 'h-12 px-2 py-1' : 'h-14 px-3 py-1.5',
        className
      )}
    >
      <img
        src="/psm-logo-blue-on-white.jpg"
        alt="PSM Workforce"
        className="h-full w-auto object-contain"
      />
    </Link>
  );
}
