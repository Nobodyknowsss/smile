export type TeamSocial = {
  label: string;
  href: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  branch: string;
  photo: string;
  shortBio: string;
  fullBio: string[];
  skills: string[];
  socials: TeamSocial[];
};

export const team: TeamMember[] = [
  {
    slug: "dr-amelia-santos",
    name: "Dr. Amelia Santos",
    role: "Lead Dentist & Founder",
    branch: "Jaro",
    photo: "https://i.pravatar.cc/400?img=49",
    shortBio:
      "Founder of iSmile and a 15-year veteran of cosmetic dentistry across Iloilo.",
    fullBio: [
      "Dr. Amelia Santos founded iSmile Dental Clinic in 2015 with a simple belief: world-class dentistry should feel calm, kind, and close to home.",
      "She earned her DMD from the University of the Philippines Manila and completed advanced fellowships in cosmetic dentistry and dental implantology. Patients describe her chairside manner as patient, gentle, and refreshingly honest about treatment options.",
      "Outside the clinic, Amelia mentors dental students at WVSU and volunteers with the Iloilo Smile Mission, providing free care to underserved barangays.",
    ],
    skills: [
      "Cosmetic Dentistry",
      "Dental Implants",
      "Veneers",
      "Smile Design",
      "Practice Leadership",
    ],
    socials: [
      { label: "Email", href: "mailto:amelia@ismile.ph" },
      { label: "Facebook", href: "https://facebook.com/ismileiloilo" },
      { label: "Instagram", href: "https://instagram.com/ismileiloilo" },
    ],
  },
  {
    slug: "dr-marcus-tan",
    name: "Dr. Marcus Tan",
    role: "Orthodontist",
    branch: "Mandurriao",
    photo: "https://i.pravatar.cc/400?img=68",
    shortBio:
      "Braces, aligners, and bite correction for kids, teens, and adults.",
    fullBio: [
      "Dr. Marcus Tan leads the orthodontics program at iSmile Mandurriao, with a focus on clear aligner therapy and traditional braces for all ages.",
      "He completed his orthodontic residency at the University of Santo Tomas and is a certified provider for both Invisalign and SureSmile. His approach blends digital treatment planning with old-school attention to facial aesthetics.",
      "Marcus is known for explaining every step with diagrams the whole family can follow — no jargon, no surprises.",
    ],
    skills: [
      "Clear Aligners",
      "Traditional Braces",
      "Bite Correction",
      "Digital Treatment Planning",
      "Pediatric Orthodontics",
    ],
    socials: [
      { label: "Email", href: "mailto:marcus@ismile.ph" },
      { label: "LinkedIn", href: "https://linkedin.com/in/marcustan" },
    ],
  },
  {
    slug: "dr-rina-villanueva",
    name: "Dr. Rina Villanueva",
    role: "Pediatric Dentist",
    branch: "Molo",
    photo: "https://i.pravatar.cc/400?img=45",
    shortBio:
      "Specializes in gentle, anxiety-free dental visits for little patients.",
    fullBio: [
      "Dr. Rina Villanueva has spent eight years turning first dental visits into first dental adventures. Her Molo office is built around kids — bright walls, a play corner, and a chair that looks more like a spaceship than equipment.",
      "She trained in pediatric dentistry at the Children's Hospital of Philadelphia and brings that experience home to Iloilo families. Behavior guidance, fluoride therapy, and sealants are her bread and butter.",
      "Parents love that Rina takes the time to explain preventive care without lecturing — and kids leave with a sticker every single time.",
    ],
    skills: [
      "Pediatric Dentistry",
      "Behavior Guidance",
      "Preventive Care",
      "Sealants & Fluoride",
      "Special Needs Care",
    ],
    socials: [
      { label: "Email", href: "mailto:rina@ismile.ph" },
      { label: "Instagram", href: "https://instagram.com/drrinasmile" },
    ],
  },
  {
    slug: "dr-julio-gonzales",
    name: "Dr. Julio Gonzales",
    role: "Oral Surgeon",
    branch: "Jaro",
    photo: "https://i.pravatar.cc/400?img=15",
    shortBio:
      "Wisdom teeth, complex extractions, and minor oral surgery — calmly and quickly.",
    fullBio: [
      "Dr. Julio Gonzales handles iSmile's surgical cases across all three branches. From routine extractions to impacted wisdom teeth and bone grafting, he brings a steady, unhurried calm to procedures that scare most patients.",
      "He holds a fellowship in oral and maxillofacial surgery from St. Luke's Medical Center and has performed over 4,000 surgical procedures. His patients consistently mention how little discomfort they feel afterward.",
      "Julio is a strong advocate of conservative dentistry — he'd rather save a tooth than remove one, and only operates when it's truly the right call.",
    ],
    skills: [
      "Wisdom Tooth Extraction",
      "Bone Grafting",
      "Minor Oral Surgery",
      "Sedation Dentistry",
      "Trauma Care",
    ],
    socials: [
      { label: "Email", href: "mailto:julio@ismile.ph" },
    ],
  },
  {
    slug: "dr-bea-lim",
    name: "Dr. Bea Lim",
    role: "Cosmetic Dentist",
    branch: "Mandurriao",
    photo: "https://i.pravatar.cc/400?img=32",
    shortBio:
      "Whitening, veneers, and smile makeovers with an eye for natural beauty.",
    fullBio: [
      "Dr. Bea Lim is iSmile's resident smile artist. She specializes in cosmetic transformations that still look completely natural — no Hollywood teeth, just your best smile.",
      "Bea is one of the few dentists in Western Visayas certified in porcelain veneer design and digital smile design (DSD). She trained at Belgrade University and apprenticed under cosmetic specialists in Singapore before joining iSmile in 2019.",
      "She's especially good with patients preparing for weddings and big career milestones — she'll plan timelines down to the week.",
    ],
    skills: [
      "Porcelain Veneers",
      "Teeth Whitening",
      "Digital Smile Design",
      "Composite Bonding",
      "Smile Makeovers",
    ],
    socials: [
      { label: "Email", href: "mailto:bea@ismile.ph" },
      { label: "Instagram", href: "https://instagram.com/drbealim" },
      { label: "TikTok", href: "https://tiktok.com/@drbealim" },
    ],
  },
  {
    slug: "ate-grace-padilla",
    name: "Ate Grace Padilla",
    role: "Head Dental Hygienist",
    branch: "Molo",
    photo: "https://i.pravatar.cc/400?img=20",
    shortBio:
      "The friendly face behind your favorite cleaning appointment.",
    fullBio: [
      "Ate Grace has been with iSmile since day one. As Head Dental Hygienist, she trains the whole hygiene team and personally handles cleanings for patients who request her by name (which is most of them).",
      "She holds a Bachelor's in Dental Hygiene from West Visayas State University and has logged over 6,000 patient cleanings. Her secret? A genuinely careful hand and a knack for explaining flossing in a way that finally sticks.",
      "When she's not at the clinic, Grace runs the iSmile community outreach program, bringing free cleanings to public school children across Iloilo.",
    ],
    skills: [
      "Deep Cleaning",
      "Scaling & Root Planing",
      "Patient Education",
      "Community Outreach",
      "Hygiene Team Training",
    ],
    socials: [
      { label: "Email", href: "mailto:grace@ismile.ph" },
      { label: "Facebook", href: "https://facebook.com/ategracepadilla" },
    ],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
