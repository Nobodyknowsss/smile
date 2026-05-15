import { Badge } from "@/components/ui/badge";
import { FacilitiesGrid } from "@/components/facilities/FacilitiesGrid";

export function FacilitiesPage() {
  return (
    <section className="relative py-20 lg:py-28 bg-cream">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #c9a84c 0px, transparent 40%), radial-gradient(circle at 80% 80%, #c9a84c 0px, transparent 40%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <Badge
            variant="outline"
            className="mb-6 h-auto gap-2 rounded-full border-gold/20 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-gold-dark"
          >
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            Our Facilities
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
            A tour of <span className="text-shine">iSmile</span>.
          </h1>
          <p className="mt-6 text-muted text-lg leading-relaxed">
            Modern, calm, and built around the patient experience. Here&apos;s a closer
            look at the spaces and equipment you&apos;ll find across our three Iloilo
            branches.
          </p>
        </div>

        <FacilitiesGrid />
      </div>
    </section>
  );
}
