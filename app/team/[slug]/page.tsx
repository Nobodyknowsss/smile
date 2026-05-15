import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamMemberDetail } from "@/components/team/TeamMemberDetail";
import { getTeamMember, team } from "@/lib/team";

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return { title: "Team Member Not Found — iSmile Dental Clinic" };
  }

  return {
    title: `${member.name} — ${member.role} | iSmile Dental Clinic`,
    description: member.shortBio,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <TeamMemberDetail member={member} />
      </main>
      <Footer />
    </div>
  );
}
