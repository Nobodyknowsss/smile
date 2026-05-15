import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamCard } from "@/components/team/TeamCard";
import { team } from "@/lib/team";

export function MeetTheTeam() {
  return (
    <section id="team" className="py-24 lg:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
            Meet the Team
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            The people behind every smile.
          </h2>
          <p className="mt-5 text-muted text-lg leading-relaxed">
            Licensed dentists, hygienists, and specialists across our three Iloilo branches —
            scroll through to meet the team that cares for you.
          </p>
        </div>
      </div>

      <div
        className="mt-14 marquee-mask"
        aria-label="Meet the iSmile team"
      >
        <div className="flex w-max animate-marquee gap-6 pr-6">
          {[...team, ...team].map((member, i) => (
            <div
              key={`${member.slug}-${i}`}
              className="shrink-0 w-[280px] sm:w-[320px]"
              aria-hidden={i >= team.length}
            >
              <TeamCard
                member={member}
                href={`/team/${member.slug}`}
                showReadMore
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Button
          asChild
          variant="outline"
          className="h-auto rounded-full border-2 border-ink/10 bg-transparent px-7 py-3 text-sm font-semibold text-ink hover:border-gold hover:bg-transparent hover:text-gold"
        >
          <Link href="/team">
            View the full team
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
