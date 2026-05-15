import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { Facility } from "@/lib/facilities";

type FacilityCardProps = {
  facility: Facility;
  href?: string;
  variant?: "marquee" | "grid";
  className?: string;
};

export function FacilityCard({
  facility,
  href,
  variant = "grid",
  className = "",
}: FacilityCardProps) {
  const isMarquee = variant === "marquee";

  const card = (
    <Card
      className={`group/facility relative gap-0 overflow-hidden rounded-3xl ring-1 ring-ink/5 bg-white p-0 transition-all duration-300 hover:-translate-y-1 hover:ring-gold/30 hover:shadow-xl hover:shadow-gold/10 ${className}`}
    >
      <div
        className={`relative overflow-hidden bg-ink/5 ${
          isMarquee ? "aspect-[4/3]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={facility.image}
          alt={`${facility.name} at iSmile Dental Clinic`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover/facility:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent"
        />
        {href && (
          <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-gold shadow-lg shadow-ink/10 backdrop-blur transition-all group-hover/facility:bg-gold group-hover/facility:text-white">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="flex flex-col p-6">
        <div className="text-lg font-semibold text-ink">{facility.name}</div>
        <p
          className={`mt-2 text-sm text-muted leading-relaxed ${
            isMarquee ? "line-clamp-3" : ""
          }`}
        >
          {facility.description}
        </p>
      </div>
    </Card>
  );

  if (!href) return card;

  return (
    <Link
      href={href}
      aria-label={`View ${facility.name} on the Facilities page`}
      className="block rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
    >
      {card}
    </Link>
  );
}
