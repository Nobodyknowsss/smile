import Link from "next/link";
import { ArrowRight, Award, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { whyUs, type WhyUsItem } from "@/lib/whyUs";
import { pillBtn } from "@/lib/constants";

const iconMap: Record<WhyUsItem["icon"], typeof Award> = {
  award: Award,
  sparkles: Sparkles,
  "heart-handshake": HeartHandshake,
  "map-pin": MapPin,
};

const marqueeItems = [...whyUs, ...whyUs];

export function WhyUs() {
  return (
    <section
      id="why"
      className="relative py-24 lg:py-32 bg-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-5">
            <span className="h-px w-8 bg-gold/40" />
            Why iSmile
            <span className="h-px w-8 bg-gold/40" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Care that earns your trust,
            <br />
            <span className="text-shine">visit after visit.</span>
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            We&apos;ve spent years perfecting the small details that make dental
            visits feel less like appointments and more like care.
          </p>
        </div>
      </div>

      <div className="relative mt-16 marquee-mask" aria-label="Why choose iSmile">
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {marqueeItems.map((item, i) => {
            const Icon = iconMap[item.icon];
            const num = (i % whyUs.length) + 1;
            return (
              <Link
                key={`${item.title}-${i}`}
                href="/why-us"
                aria-label={`Learn more: ${item.title}`}
                className="group block w-[300px] sm:w-[340px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-3xl"
              >
                <Card className="relative flex h-full flex-col gap-6 rounded-3xl ring-1 ring-ink/5 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:ring-gold/20 hover:shadow-xl hover:shadow-gold/10">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-6 top-6 font-bold text-[5rem] leading-none text-gold/[0.08] tracking-tight select-none transition-colors duration-300 group-hover:text-gold/20"
                  >
                    0{num}
                  </span>

                  <div className="relative">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/15 to-gold/5 ring-1 ring-gold/20 transition-all duration-300 group-hover:from-gold group-hover:to-gold-dark group-hover:ring-gold group-hover:shadow-lg group-hover:shadow-gold/30">
                      <Icon className="h-6 w-6 text-gold transition-colors duration-300 group-hover:text-white" />
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.title}
                    </h3>
                    <div
                      aria-hidden
                      className="mt-3 h-px w-10 bg-gold/40 transition-all duration-300 group-hover:w-16 group-hover:bg-gold"
                    />
                    <p className="mt-4 text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="relative flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {item.detail}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="relative mt-14 flex justify-center px-6 lg:px-10">
        <Button
          asChild
          className={`${pillBtn} bg-ink text-cream shadow-lg shadow-ink/20 hover:-translate-y-0.5 hover:bg-gold hover:shadow-xl`}
        >
          <Link href="/why-us">
            View All Reasons
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
