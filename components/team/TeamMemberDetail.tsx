import Link from "next/link";
import { ArrowLeft, BadgeCheck, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { TeamMember } from "@/lib/team";

export function TeamMemberDetail({ member }: { member: TeamMember }) {
  return (
    <section className="relative py-16 lg:py-24 bg-cream">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 10%, #c9a84c 0px, transparent 40%), radial-gradient(circle at 10% 80%, #c9a84c 0px, transparent 40%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-gold transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to team
        </Link>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14 items-start">
          <div className="flex flex-col items-center lg:items-start">
            <Avatar
              size="lg"
              className="size-56 ring-4 ring-gold/20 after:hidden shadow-xl shadow-gold/10"
            >
              <AvatarImage
                src={member.photo}
                alt={`${member.name}, ${member.role}`}
              />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <Badge className="mt-6 h-auto rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold-dark hover:bg-gold/10">
              <BadgeCheck className="w-3.5 h-3.5" />
              iSmile {member.branch}
            </Badge>
          </div>

          <div>
            <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-3">
              {member.role}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {member.name}
            </h1>

            <div className="mt-4 inline-flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 text-gold" />
              iSmile {member.branch} Branch
            </div>

            <div className="mt-8 space-y-5">
              {member.fullBio.map((paragraph, i) => (
                <p key={i} className="text-ink/80 leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            {member.skills.length > 0 && (
              <>
                <Separator className="my-10 bg-ink/5" />
                <div>
                  <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
                    Skills &amp; Expertise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <Card
                        key={skill}
                        className="gap-0 rounded-full ring-1 ring-ink/5 bg-white px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:ring-gold/30"
                      >
                        {skill}
                      </Card>
                    ))}
                  </div>
                </div>
              </>
            )}

            {member.socials.length > 0 && (
              <>
                <Separator className="my-10 bg-ink/5" />
                <div>
                  <div className="text-xs font-semibold text-gold uppercase tracking-[0.25em] mb-4">
                    Get in Touch
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {member.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-gold"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
