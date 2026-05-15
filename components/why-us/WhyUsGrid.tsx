import { Award, HeartHandshake, MapPin, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { whyUs, type WhyUsItem } from "@/lib/whyUs";

const iconMap: Record<WhyUsItem["icon"], typeof Award> = {
  award: Award,
  sparkles: Sparkles,
  "heart-handshake": HeartHandshake,
  "map-pin": MapPin,
};

export function WhyUsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {whyUs.map((item, i) => {
        const Icon = iconMap[item.icon];
        const num = i + 1;
        return (
          <Card
            key={item.title}
            className="group relative flex h-full flex-col gap-6 rounded-3xl ring-1 ring-ink/5 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:ring-gold/30 hover:shadow-xl hover:shadow-gold/10"
          >
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
        );
      })}
    </div>
  );
}
