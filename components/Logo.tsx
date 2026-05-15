import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
        <path
          d="M20 6c-4 0-7 2.5-9 2.5S5 7 4 10c-1 4 0 8 1 11s2 7 4 7c2 0 2.5-3 3.5-5.5C13.5 20 14 19 15 19s1.5 1 2.5 3.5C18.5 25 19 28 21 28c2 0 3-4 4-7s2-7 1-11c-1-3-4-1.5-6-1.5S24 6 20 6z"
          fill="#c9a84c"
        />
        <circle cx="14" cy="13" r="1.5" fill="#fdf8f0" />
      </svg>
      <div className="leading-none">
        <div className="font-bold text-2xl tracking-tight text-ink">
          i<span className="text-gold">Smile</span>
        </div>
        <div className="text-[9px] tracking-[0.25em] uppercase text-muted mt-0.5">
          Dental Clinic
        </div>
      </div>
    </Link>
  );
}
