import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Maria Dela Cruz",
    location: "Jaro",
    photo: "https://i.pravatar.cc/120?img=47",
    rating: 5,
    quote:
      "The most painless cleaning I've ever had. Friendly staff, spotless clinic — I'll never go anywhere else.",
  },
  {
    name: "Jericho Tan",
    location: "Mandurriao",
    photo: "https://i.pravatar.cc/120?img=12",
    rating: 5,
    quote:
      "Got my braces here last year. The team explained every step and the results speak for themselves.",
  },
  {
    name: "Anna Villanueva",
    location: "Molo",
    photo: "https://i.pravatar.cc/120?img=32",
    rating: 5,
    quote:
      "Whitening session was quick and the difference is unreal. Worth every peso — I keep getting compliments.",
  },
  {
    name: "Marco Reyes",
    location: "Jaro",
    photo: "https://i.pravatar.cc/120?img=68",
    rating: 5,
    quote:
      "I dreaded the dentist for years. iSmile completely changed that — gentle, calm, and zero pressure.",
  },
  {
    name: "Bea Santiago",
    location: "Mandurriao",
    photo: "https://i.pravatar.cc/120?img=45",
    rating: 5,
    quote:
      "Took my whole family for a checkup. Even my 6-year-old left smiling. That's a miracle in our house.",
  },
  {
    name: "Paolo Gonzales",
    location: "Molo",
    photo: "https://i.pravatar.cc/120?img=15",
    rating: 5,
    quote:
      "Modern equipment, fair prices, and they actually listen. Hard to find a clinic that hits all three.",
  },
  {
    name: "Trisha Lim",
    location: "Jaro",
    photo: "https://i.pravatar.cc/120?img=20",
    rating: 5,
    quote:
      "Booked last-minute for a toothache and they squeezed me in same day. Saved me a very long weekend.",
  },
  {
    name: "Kenneth Yulo",
    location: "Mandurriao",
    photo: "https://i.pravatar.cc/120?img=60",
    rating: 5,
    quote:
      "Crown work that looks completely natural. Even my wife couldn't tell which tooth they fixed.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Patient Stories
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Smiles that <span className="text-shine">speak</span> for themselves.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Real words from real patients across our three Iloilo branches.
          </p>
        </div>
      </div>

      <div
        className="mt-16 marquee-mask marquee-pause"
        aria-label="Patient testimonials"
      >
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...testimonials, ...testimonials].map((t, i) => (
            <Card
              key={`${t.name}-${i}`}
              className="w-[340px] sm:w-[380px] shrink-0 gap-0 rounded-3xl ring-1 ring-ink/5 bg-cream/60 p-7 transition-all hover:ring-gold/30 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="flex items-center gap-4">
                <Avatar size="lg" className="size-14 ring-2 ring-gold/20 after:hidden">
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
                  <Star key={idx} className="w-4 h-4 fill-current" aria-hidden />
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
