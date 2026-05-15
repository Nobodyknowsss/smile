import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacilityCard } from "@/components/facilities/FacilityCard";
import { facilities } from "@/lib/facilities";

export function Facilities() {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Our Facilities
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Spaces built for your <span className="text-shine">comfort</span>.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Take a peek inside iSmile — from our welcoming lounges to our digital
            imaging suites, every corner is designed with patients in mind.
          </p>
        </div>
      </div>

      <div
        className="mt-16 marquee-mask marquee-pause"
        aria-label="iSmile clinic facilities"
      >
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...facilities, ...facilities].map((f, i) => (
            <div
              key={`${f.slug}-${i}`}
              className="shrink-0 w-[300px] sm:w-[340px]"
              aria-hidden={i >= facilities.length}
            >
              <FacilityCard
                facility={f}
                href="/facilities"
                variant="marquee"
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          asChild
          variant="outline"
          className="h-auto rounded-full border-2 border-ink/10 bg-transparent px-7 py-3 text-sm font-semibold text-ink hover:border-gold hover:bg-transparent hover:text-gold"
        >
          <Link href="/facilities">
            Tour all facilities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
