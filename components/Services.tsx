import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/services";
import { pillBtn } from "@/lib/constants";

export function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Complete care for every smile.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            From routine checkups to advanced restorations, our skilled team handles
            every aspect of your dental health under one roof.
          </p>
        </div>
      </div>

      <div className="mt-16 marquee-mask" aria-label="Our services">
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...services, ...services].map((s, i) => (
            <Link
              key={`${s.title}-${i}`}
              href="/services"
              aria-label={`Learn more about ${s.title}`}
              className="group/service block w-[320px] sm:w-[360px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-3xl"
            >
              <Card className="flex h-full flex-col gap-0 overflow-hidden rounded-3xl ring-1 ring-ink/5 bg-cream/60 p-0 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:ring-gold/20 hover:shadow-xl hover:shadow-gold/10">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                  <img
                    src={s.image}
                    alt={`${s.title} at iSmile Dental Clinic`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover/service:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent"
                  />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-gold shadow-lg shadow-ink/10 backdrop-blur">
                    {s.icon}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <CardHeader className="px-0">
                    <CardTitle className="text-xl font-semibold">
                      {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-3 px-0">
                    <CardDescription className="text-muted leading-relaxed">
                      {s.desc}
                    </CardDescription>
                  </CardContent>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-14 flex justify-center px-6 lg:px-10">
        <Button
          asChild
          className={`${pillBtn} bg-ink text-cream shadow-lg shadow-ink/20 hover:-translate-y-0.5 hover:bg-gold hover:shadow-xl`}
        >
          <Link href="/services">
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
