import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Facilities } from "@/components/Facilities";
import { MeetTheTeam } from "@/components/MeetTheTeam";
import { Testimonials } from "@/components/Testimonials";
import { Branches } from "@/components/Branches";
import { Payment } from "@/components/Payment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Facilities />
        <MeetTheTeam />
        <Testimonials />
        <Branches />
        <Payment />
      </main>
      <Footer />
    </div>
  );
}
