import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const teamTestimonials = [
  {
    name: "Camille Rosales",
    location: "Jaro",
    photo: "https://i.pravatar.cc/120?img=5",
    rating: 5,
    quote:
      "Dr. Patricio explained every step before she even picked up a tool. I've never trusted a dentist this quickly.",
  },
  {
    name: "Ramon Aquino",
    location: "Mandurriao",
    photo: "https://i.pravatar.cc/120?img=33",
    rating: 5,
    quote:
      "The hygienist remembered my name and my last visit's notes. That kind of care is rare.",
  },
  {
    name: "Lara Tupas",
    location: "Molo",
    photo: "https://i.pravatar.cc/120?img=49",
    rating: 5,
    quote:
      "My orthodontist walked me through three options instead of pushing the most expensive one. Huge respect.",
  },
  {
    name: "Joseph Lacson",
    location: "Jaro",
    photo: "https://i.pravatar.cc/120?img=58",
    rating: 5,
    quote:
      "I came in nervous about an extraction. The team kept checking in on me — felt more like family than a clinic.",
  },
  {
    name: "Andrea Mapa",
    location: "Mandurriao",
    photo: "https://i.pravatar.cc/120?img=44",
    rating: 5,
    quote:
      "My son's pediatric dentist actually got him to laugh during the cleaning. We are never going anywhere else.",
  },
  {
    name: "Vince Sarabia",
    location: "Molo",
    photo: "https://i.pravatar.cc/120?img=11",
    rating: 5,
    quote:
      "The whole team coordinates so well — front desk, hygienist, dentist. It feels like one smooth handoff.",
  },
  {
    name: "Patricia Hofileña",
    location: "Jaro",
    photo: "https://i.pravatar.cc/120?img=24",
    rating: 5,
    quote:
      "My dentist took the time to draw out the procedure on paper. I left understanding exactly what was happening.",
  },
  {
    name: "Miguel Tirol",
    location: "Mandurriao",
    photo: "https://i.pravatar.cc/120?img=64",
    rating: 5,
    quote:
      "Skilled hands, calm voice, zero rush. Honestly the best dental team I've worked with anywhere in the country.",
  },
];

export function TeamTestimonials() {
  return (
    <section
      id="team-testimonials"
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Kind Words
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            What patients say about our <span className="text-shine">team</span>.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Stories from patients who trust our dentists, hygienists, and
            specialists with their smiles.
          </p>
        </div>
      </div>

      <div
        className="mt-16 marquee-mask"
        aria-label="Patient testimonials about our team"
      >
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...teamTestimonials, ...teamTestimonials].map((t, i) => (
            <Card
              key={`${t.name}-${i}`}
              className="w-[340px] sm:w-[380px] shrink-0 gap-0 rounded-3xl ring-1 ring-ink/5 bg-cream/60 p-7"
            >
              <div className="flex items-center gap-4">
                <Avatar
                  size="lg"
                  className="size-14 ring-2 ring-gold/20 after:hidden"
                >
                  <AvatarImage
                    src={t.photo}
                    alt={`${t.name}, patient at iSmile ${t.location} branch`}
                    loading="lazy"
                  />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted mt-0.5">
                    {t.location} branch
                  </div>
                </div>
              </div>

              <div
                className="mt-5 flex gap-1 text-gold"
                aria-label={`${t.rating} out of 5 stars`}
              >
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-current"
                    aria-hidden
                  />
                ))}
              </div>

              <p className="mt-4 text-ink/80 leading-relaxed text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
