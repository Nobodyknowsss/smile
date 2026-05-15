import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FacilitiesPage } from "@/components/facilities/FacilitiesPage";

export const metadata: Metadata = {
  title: "Our Facilities — iSmile Dental Clinic",
  description:
    "Tour iSmile Dental Clinic's facilities — modern treatment rooms, digital X-ray suites, sterilization centers, and patient-first spaces across our three Iloilo branches.",
};

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <FacilitiesPage />
      </main>
      <Footer />
    </div>
  );
}
