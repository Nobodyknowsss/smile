import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { pillBtn } from "@/lib/constants";

const bubbles = [
  {
    emoji: "⭐",
    label: "Rating",
    title: "5-Star Rated",
    position: "top-2 -left-4 sm:-left-8",
    animation: "animate-float",
    delay: "0s",
  },
  {
    emoji: "✅",
    label: "Trusted by",
    title: "500+ Happy Patients",
    position: "top-1/3 -right-3 sm:-right-8",
    animation: "animate-float-slow",
    delay: "0.6s",
  },
  {
    emoji: "🏆",
    label: "Experience",
    title: "10+ Years of Excellence",
    position: "-bottom-2 -left-3 sm:-left-10",
    animation: "animate-float-fast",
    delay: "1.1s",
  },
  {
    emoji: "📍",
    label: "Locations",
    title: "3 Branches in Iloilo",
    position: "bottom-1/4 -right-4 sm:-right-10",
    animation: "animate-float-slow",
    delay: "1.6s",
  },
];

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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -m-10 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(201,168,76,0.22) 1.2px, transparent 1.4px)",
              backgroundSize: "22px 22px",
              WebkitMaskImage:
                "radial-gradient(circle at center, #000 55%, transparent 78%)",
              maskImage:
                "radial-gradient(circle at center, #000 55%, transparent 78%)",
            }}
          />

          <div className="relative aspect-square max-w-md mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/35 via-gold-light/25 to-cream blur-2xl"
            />
            <div
              aria-hidden
              className="absolute inset-[8%] rounded-full bg-gradient-to-tr from-gold-light/40 via-cream to-gold/20"
            />
            <div
              aria-hidden
              className="absolute inset-[6%] rounded-full ring-1 ring-gold/15"
            />

            <div className="absolute inset-0 flex items-end justify-center animate-float">
              <div className="relative h-[92%] w-[92%]">
                <Image
                  src="/images/dentist.png"
                  alt="iSmile Iloilo dentist"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 480px"
                  className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(168,134,44,0.25)]"
                />
              </div>
            </div>

            {bubbles.map((bubble) => (
              <Card
                key={bubble.title}
                className={`absolute ${bubble.position} ${bubble.animation} flex-row items-center gap-3 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-gold/10 ring-0`}
                style={{ animationDelay: bubble.delay }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-lg">
                  <span aria-hidden>{bubble.emoji}</span>
                </div>
                <div className="pr-1">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-muted">
                    {bubble.label}
                  </div>
                  <div className="text-sm font-semibold leading-tight text-ink">
                    {bubble.title}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
