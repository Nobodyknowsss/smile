import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-cream border-t border-ink/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 text-muted text-sm leading-relaxed max-w-sm">
            iSmile Dental Clinic — bringing brighter, healthier smiles to Iloilo City
            with three convenient branches and a friendly team.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Quick Links</div>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><Link href="/#services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link href="/#why" className="hover:text-gold transition-colors">Why Us</Link></li>
            <li><Link href="/facilities" className="hover:text-gold transition-colors">Facilities</Link></li>
            <li><Link href="/team" className="hover:text-gold transition-colors">Our Team</Link></li>
            <li><Link href="/#branches" className="hover:text-gold transition-colors">Branches</Link></li>
            <li><Link href="/#contact" className="hover:text-gold transition-colors">Book Now</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold mb-4">Get in Touch</div>
          <ul className="space-y-2.5 text-sm text-muted">
            <li>0910 650 5388 (Jaro)</li>
            <li>0946 026 0488 (Mandurriao)</li>
            <li>0370 381 0988 (Molo)</li>
            <li>Iloilo City, Philippines</li>
          </ul>
        </div>
      </div>

      <Separator className="bg-ink/5" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
        <div>© {new Date().getFullYear()} iSmile Dental Clinic. All rights reserved.</div>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
