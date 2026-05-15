import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhyUsPage } from "@/components/why-us/WhyUsPage";

export const metadata: Metadata = {
  title: "Why iSmile — iSmile Dental Clinic",
  description:
    "Discover why patients across Iloilo choose iSmile Dental Clinic — experienced dentists, modern equipment, affordable pricing, and three convenient branches.",
};

export default function Page() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <WhyUsPage />
      </main>
      <Footer />
    </div>
  );
}
