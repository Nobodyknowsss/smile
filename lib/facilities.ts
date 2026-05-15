export type Facility = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const facilities: Facility[] = [
  {
    slug: "reception-lounge",
    name: "Reception & Lounge",
    description:
      "A warm, sunlit waiting area designed to feel more like a hotel lobby than a clinic — complimentary drinks included.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "treatment-rooms",
    name: "Treatment Rooms",
    description:
      "Private, fully-equipped treatment suites with ergonomic chairs, overhead screens, and gentle ambient lighting.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "sterilization-center",
    name: "Sterilization Center",
    description:
      "Hospital-grade autoclaves and instrument tracking — every tool is sterilized, sealed, and traceable to your visit.",
    image:
      "https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "digital-xray-suite",
    name: "Digital X-Ray Suite",
    description:
      "Low-radiation digital imaging and 3D cone-beam scans for accurate diagnoses without the long waits.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "kids-corner",
    name: "Kids' Corner",
    description:
      "A bright, playful zone with books, toys, and a spaceship-style chair that turns first visits into adventures.",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "consultation-lounge",
    name: "Consultation Lounge",
    description:
      "Quiet rooms with chairside screens for treatment planning, smile previews, and unhurried conversations.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "whitening-bar",
    name: "Whitening Bar",
    description:
      "A dedicated room for cosmetic whitening sessions — shade-matched lighting and zero wait time between steps.",
    image:
      "https://images.unsplash.com/photo-1581585504925-c0d6f5c34cfa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "orthodontic-lab",
    name: "Orthodontic Lab",
    description:
      "On-site lab for braces adjustments, aligner fittings, and same-day retainers across all three branches.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
  },
];
