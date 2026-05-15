import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const branches = [
  {
    name: "Jaro Branch",
    address: "#397 L. Lopez Street, Brgy. San Vicente, Jaro, Iloilo City",
    phones: ["0910 650 5388", "(033) 321 5382"],
    hours: "Monday – Sunday: 9AM – 5PM",
    note: null,
  },
  {
    name: "Mandurriao Branch",
    address: "Guzman Street, Hilaw-an Sur, Mandurriao, Iloilo City",
    phones: ["0946 026 0488", "(033) 325 0453"],
    hours: "Monday – Saturday: 9AM – 5PM",
    note: "Sunday: By appointment only",
  },
  {
    name: "Molo Branch",
    address: "Lot 4, M. Locsin Street, Tay-ac, Molo, Iloilo City",
    phones: ["0370 381 0988", "(033) 329 3078"],
    hours: "Monday – Saturday: 9AM – 5PM",
    note: null,
  },
];

export function Branches() {
  return (
    <section id="branches" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Our Branches
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Three locations across Iloilo City.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Visit the branch nearest you — same trusted care at every location.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {branches.map((b) => (
            <Card
              key={b.name}
              className="group/branch gap-0 rounded-3xl ring-1 ring-ink/5 bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:ring-gold/30 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gold text-white flex items-center justify-center transition-transform group-hover/branch:scale-110">
                  <MapPin className="w-5 h-5" />
                </div>
                <Badge className="h-auto rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark hover:bg-gold/10">
                  Open
                </Badge>
              </div>

              <CardHeader className="mt-6 px-0">
                <CardTitle className="text-2xl font-bold">{b.name}</CardTitle>
              </CardHeader>

              <CardContent className="mt-5 px-0 space-y-4 text-sm">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-ink/80 leading-relaxed">{b.address}</p>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-ink/80 space-y-0.5">
                    {b.phones.map((p) => (
                      <div key={p}>{p}</div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="text-ink/80">
                    <div>{b.hours}</div>
                    {b.note && <div className="text-muted text-xs mt-1">{b.note}</div>}
                  </div>
                </div>
              </CardContent>

              <a
                href={`tel:${b.phones[0].replace(/\s/g, "")}`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
              >
                Call this branch
                <ArrowRight className="w-4 h-4 transition-transform group-hover/branch:translate-x-1" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
