import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamPage } from "@/components/team/TeamPage";
import { TeamTestimonials } from "@/components/team/TeamTestimonials";

export const metadata: Metadata = {
  title: "Our Team — iSmile Dental Clinic",
  description:
    "Meet the licensed dentists, hygienists, and specialists behind iSmile Dental Clinic in Iloilo City.",
};

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <TeamPage />
        <TeamTestimonials />
      </main>
      <Footer />
    </div>
  );
}
