import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/services";

export function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <Card
          key={s.title}
          className="group/service flex h-full flex-col gap-0 overflow-hidden rounded-3xl ring-1 ring-ink/5 bg-white p-0 transition-all duration-300 hover:-translate-y-1 hover:ring-gold/30 hover:shadow-xl hover:shadow-gold/10"
        >
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
              <CardTitle className="text-xl font-semibold">{s.title}</CardTitle>
            </CardHeader>
            <CardContent className="mt-3 px-0">
              <CardDescription className="text-muted leading-relaxed">
                {s.desc}
              </CardDescription>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
}
