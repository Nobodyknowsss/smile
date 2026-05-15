import type { ReactNode } from "react";

export type Service = {
  title: string;
  desc: string;
  image: string;
  icon: ReactNode;
};

export const services: Service[] = [
  {
    title: "Routine Checkups",
    desc: "Comprehensive exams to keep your smile in perfect health, year-round.",
    image: "/images/Routine-Checkups.jfif",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 5.5c-2-1.5-4-2-6-1.5C3 4.8 2 7 2.5 10.5c.5 3.5 2.5 8.5 4 9.5 1.5 1 2.5-1.5 3-3 .5-1.5 1-3 2-3s1.5 1.5 2 3c.5 1.5 1.5 4 3 3 1.5-1 3.5-6 4-9.5C21.5 7 20.5 4.8 18 4c-2-.5-4 0-6 1.5z" />
      </svg>
    ),
  },
  {
    title: "Teeth Cleaning",
    desc: "Professional cleaning that removes plaque and brings back natural shine.",
    image: "/images/Teeth-Cleaning.jfif",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M9.5 2v7M14.5 2v7M5 9h14l-1.5 11a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2L5 9z" />
        <path d="M9 14h6" />
      </svg>
    ),
  },
  {
    title: "Teeth Whitening",
    desc: "Brighten your smile by several shades with safe, in-office treatments.",
    image: "/images/Teeth-Whitening.webp",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
        <path d="M19 14l.7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14z" />
      </svg>
    ),
  },
  {
    title: "Braces & Aligners",
    desc: "Modern orthodontics to straighten teeth and improve your bite.",
    image: "/images/Braces-Aligners.jfif",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <rect x="3" y="8" width="18" height="8" rx="2" />
        <path d="M7 8v8M12 8v8M17 8v8" />
      </svg>
    ),
  },
  {
    title: "Tooth Extraction",
    desc: "Gentle, painless removal of damaged or problematic teeth.",
    image: "/images/Tooth-Extraction.jfif",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path
          d="M12 3c-3 0-5 2-5 5 0 2 .5 4 1 6s1 4 2 4 1.5-2 2-4 1-4 1-6c0-3-2-5-5-5z"
          transform="rotate(15 12 11)"
        />
      </svg>
    ),
  },
  {
    title: "Dental Restoration",
    desc: "Fillings, crowns, and bridges that look and feel completely natural.",
    image: "/images/Dental-Restoration.jfif",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
      >
        <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1z" />
      </svg>
    ),
  },
];
