import Link from "next/link";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { pillBtn } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a84c 0px, transparent 40%), radial-gradient(circle at 80% 60%, #c9a84c 0px, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Badge
            variant="outline"
            className="mb-7 h-auto gap-2 rounded-full border-gold/20 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-dark"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Iloilo&apos;s trusted dental clinic
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
            Your <span className="text-shine">brightest</span> smile
            <br />
            starts here.
          </h1>
          <p className="mt-7 text-lg text-muted max-w-lg leading-relaxed">
            Premium dental care at three convenient branches across Iloilo City.
            Modern equipment, gentle hands, and prices that make sense.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              asChild
              className={`${pillBtn} bg-gold text-white shadow-lg shadow-gold/30 hover:-translate-y-0.5 hover:bg-gold-dark hover:shadow-xl`}
            >
              <Link href="/#contact">
                Book an Appointment
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className={`${pillBtn} border-2 border-ink/10 bg-transparent text-ink hover:border-gold hover:bg-transparent hover:text-gold`}
            >
              <Link href="/#services">View Services</Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold text-ink">10+</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Years caring</div>
            </div>
            <Separator orientation="vertical" className="h-10 bg-ink/10" />
            <div>
              <div className="text-3xl font-bold text-ink">3</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Branches</div>
            </div>
            <Separator orientation="vertical" className="h-10 bg-ink/10" />
            <div>
              <div className="text-3xl font-bold text-ink">5★</div>
              <div className="text-xs text-muted uppercase tracking-wider mt-1">Patient rated</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold-light/10 rounded-[3rem] rotate-6" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gold to-gold-light rounded-[3rem] -rotate-3 shadow-2xl shadow-gold/30" />
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              <svg viewBox="0 0 200 200" className="w-3/4 h-3/4" fill="none">
                <path
                  d="M100 30c-15 0-25 8-32 8s-15-5-22 5c-7 14 0 30 4 42 4 12 8 27 16 27 8 0 10-12 14-21 4-9 6-13 10-13 0 0 4 0 8 13 4 9 6 21 14 21 8 0 12-15 16-27 4-12 11-28 4-42-7-10-15-5-22-5s-17-8-32-8z"
                  fill="white"
                />
                <circle cx="78" cy="65" r="6" fill="#fdf8f0" opacity="0.8" />
                <circle cx="82" cy="70" r="3" fill="white" />
              </svg>
            </div>
            <Card className="absolute -top-4 -left-6 flex-row items-center gap-3 px-5 py-3 rounded-2xl shadow-xl ring-0 animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-muted">Painless</div>
                <div className="text-sm font-semibold">Modern Care</div>
              </div>
            </Card>
            <Card className="absolute -bottom-4 -right-4 flex-row items-center gap-3 px-5 py-3 rounded-2xl shadow-xl ring-0 animate-float" style={{ animationDelay: "1.2s" }}>
              <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div>
                <div className="text-xs text-muted">Trusted by</div>
                <div className="text-sm font-semibold">1000+ Patients</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
