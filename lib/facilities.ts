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
    image: "/images/Reception-Lounge.jfif",
  },
  {
    slug: "treatment-rooms",
    name: "Treatment Rooms",
    description:
      "Private, fully-equipped treatment suites with ergonomic chairs, overhead screens, and gentle ambient lighting.",
    image: "/images/Treatment-Rooms.jfif",
  },
  {
    slug: "sterilization-center",
    name: "Sterilization Center",
    description:
      "Hospital-grade autoclaves and instrument tracking — every tool is sterilized, sealed, and traceable to your visit.",
    image: "/images/Sterilization-Center.jfif",
  },
  {
    slug: "digital-xray-suite",
    name: "Digital X-Ray Suite",
    description:
      "Low-radiation digital imaging and 3D cone-beam scans for accurate diagnoses without the long waits.",
    image: "/images/Digital-X-Ray-Suite.jfif",
  },
  {
    slug: "kids-corner",
    name: "Kids' Corner",
    description:
      "A bright, playful zone with books, toys, and a spaceship-style chair that turns first visits into adventures.",
    image: "/images/Kids-Corner.jfif",
  },
  {
    slug: "consultation-lounge",
    name: "Consultation Lounge",
    description:
      "Quiet rooms with chairside screens for treatment planning, smile previews, and unhurried conversations.",
    image: "/images/Consultation-Lounge.webp",
  },
  {
    slug: "orthodontic-lab",
    name: "Orthodontic Lab",
    description:
      "On-site lab for braces adjustments, aligner fittings, and same-day retainers across all three branches.",
    image: "/images/Orthodontic-Lab.jfif",
  },
];
