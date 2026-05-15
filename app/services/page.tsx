import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServicesPage } from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services — iSmile Dental Clinic",
  description:
    "Explore every dental service offered at iSmile Dental Clinic — routine checkups, cleaning, whitening, braces, extractions, and restorations across our three Iloilo branches.",
};

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <ServicesPage />
      </main>
      <Footer />
    </div>
  );
}
