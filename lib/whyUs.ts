export type WhyUsItem = {
  title: string;
  desc: string;
  detail: string;
  icon: "award" | "sparkles" | "heart-handshake" | "map-pin";
};

export const whyUs: WhyUsItem[] = [
  {
    title: "Experienced Dentists",
    desc: "A team of licensed professionals with years of hands-on experience.",
    detail: "Decades combined",
    icon: "award",
  },
  {
    title: "Modern Equipment",
    desc: "Up-to-date dental technology for safer, faster, more comfortable care.",
    detail: "Digital workflow",
    icon: "sparkles",
  },
  {
    title: "Affordable Pricing",
    desc: "Quality dental care without the premium price tag.",
    detail: "Transparent rates",
    icon: "heart-handshake",
  },
  {
    title: "3 Convenient Locations",
    desc: "Branches in Jaro, Mandurriao, and Molo — care close to home.",
    detail: "Across Iloilo City",
    icon: "map-pin",
  },
];
