import { TeamCard } from "@/components/team/TeamCard";
import { team } from "@/lib/team";

export function TeamGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {team.map((member) => (
        <TeamCard
          key={member.slug}
          member={member}
          href={`/team/${member.slug}`}
        />
      ))}
    </div>
  );
}
