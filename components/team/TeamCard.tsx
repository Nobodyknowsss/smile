import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { TeamMember } from "@/lib/team";

type TeamCardProps = {
  member: TeamMember;
  href: string;
  showReadMore?: boolean;
  className?: string;
};

export function TeamCard({
  member,
  href,
  showReadMore = false,
  className = "",
}: TeamCardProps) {
  return (
    <Card
      className={`group/team relative gap-0 rounded-3xl ring-1 ring-ink/5 bg-cream/60 p-7 transition-all hover:-translate-y-1 hover:ring-gold/30 hover:shadow-xl hover:shadow-gold/5 ${className}`}
    >
      <Link
        href={href}
        aria-label={`View profile of ${member.name}`}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      />

      <div className="flex flex-col items-center text-center">
        <Avatar
          size="lg"
          className="size-24 ring-2 ring-gold/20 after:hidden transition-transform group-hover/team:scale-105"
        >
          <AvatarImage
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
          />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>

        <div className="mt-5 text-lg font-semibold text-ink">{member.name}</div>
        <div className="mt-1 text-xs font-semibold text-gold uppercase tracking-wider">
          {member.role}
        </div>
        <div className="mt-1 text-xs text-muted">{member.branch} branch</div>

        <p className="mt-4 text-sm text-ink/80 leading-relaxed">
          {member.shortBio}
        </p>

        {showReadMore && (
          <span className="relative z-20 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark group-hover/team:text-gold transition-colors">
            Read More
            <ArrowRight className="w-4 h-4 transition-transform group-hover/team:translate-x-1" />
          </span>
        )}
      </div>
    </Card>
  );
}
