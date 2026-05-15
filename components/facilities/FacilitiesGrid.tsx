import { FacilityCard } from "@/components/facilities/FacilityCard";
import { facilities } from "@/lib/facilities";

export function FacilitiesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {facilities.map((f) => (
        <FacilityCard key={f.slug} facility={f} />
      ))}
    </div>
  );
}
