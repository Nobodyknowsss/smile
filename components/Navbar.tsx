import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-cream/80 border-b border-gold/10">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-9 text-sm font-medium text-ink/80">
          <Link href="/#services" className="hover:text-gold transition-colors">Services</Link>
          <Link href="/#why" className="hover:text-gold transition-colors">Why Us</Link>
          <Link href="/facilities" className="hover:text-gold transition-colors">Facilities</Link>
          <Link href="/#team" className="hover:text-gold transition-colors">Team</Link>
          <Link href="/#branches" className="hover:text-gold transition-colors">Branches</Link>
          <Link href="/#contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>
        <Button
          asChild
          className="hidden sm:inline-flex h-auto rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream hover:bg-gold"
        >
          <Link href="/#contact">
            Book Now
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </nav>
    </header>
  );
}
