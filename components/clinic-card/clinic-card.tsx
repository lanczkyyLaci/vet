import Link from "next/link";
import Image from "next/image";
import { MapPin, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { BackLink } from "@/components/back-link/back-link";
import { InfoNotice } from "@/components/ui/info-notice";
import { FeatureBadge } from "@/components/ui/feature-badge";
import { paths } from "@/config/paths";
import { type ClinicData } from "@/types/clinic";

const variantStyles = {
  blue: {
    shadow: "shadow-blue-900/5 hover:shadow-blue-500/20 hover:ring-blue-300/50",
    overlay: "from-blue-600/20 to-indigo-600/10",
    badgeText: "text-blue-700",
    doctorGradient: "from-blue-600 to-indigo-600",
    iconGradient: "from-blue-500 to-indigo-600",
    iconShadow: "shadow-blue-500/30",
    titleBadge: "bg-blue-100 text-blue-700",
  },
  teal: {
    shadow: "shadow-teal-900/5 hover:shadow-teal-500/20 hover:ring-teal-300/50",
    overlay: "from-teal-600/20 to-emerald-600/10",
    badgeText: "text-teal-700",
    doctorGradient: "from-teal-500 to-emerald-600",
    iconGradient: "from-teal-500 to-emerald-600",
    iconShadow: "shadow-teal-500/30",
    titleBadge: "bg-teal-100 text-teal-700",
  },
} as const;

export function ClinicCard({ clinic }: { clinic: ClinicData }) {
  const style = variantStyles[clinic.variant];
  const BadgeIcon = clinic.badgeIcon;
  const ContentIcon = clinic.contentIcon;

  return (
    <Link href={clinic.href} className="group">
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
          style.shadow,
          clinic.variant === "blue" && "[backface-visibility:hidden]",
        )}
      >
        {/* Image Section */}
        <div
          className={cn(
            "relative h-56 overflow-hidden",
            clinic.variant === "blue" && "[backface-visibility:hidden]",
          )}
        >
          <Image
            src={clinic.image}
            alt={clinic.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br mix-blend-multiply",
              style.overlay,
            )}
          />

          {/* Floating badge */}
          <div
            className={cn(
              "absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm",
              style.badgeText,
            )}
          >
            <BadgeIcon className="h-3.5 w-3.5" />
            {clinic.badgeLabel}
          </div>

          {/* Doctor name badge */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-2 py-2 shadow-lg ring-1 ring-blue-100 backdrop-blur-sm">
            <div
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br",
                style.doctorGradient,
              )}
            >
              <UserRound className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-800">
              {clinic.doctorName}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative flex flex-1 flex-col p-6">
          {/* Icon */}
          <div
            className={cn(
              "absolute -top-8 right-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110",
              style.iconGradient,
              style.iconShadow,
            )}
          >
            <ContentIcon className="h-8 w-8 text-white" />
          </div>

          <div className="pr-16">
            {clinic.titleBadge && (
              <div
                className={cn(
                  "mb-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                  style.titleBadge,
                )}
              >
                {clinic.titleBadge}
              </div>
            )}
            <h3 className="text-xl font-bold text-slate-900">
              {clinic.title}
            </h3>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4" />
              <span>{clinic.address}</span>
            </div>
            <p className="mt-3 leading-relaxed text-slate-600">
              {clinic.description}
            </p>
          </div>

          {/* Info notice */}
          {clinic.infoNotice && (
            <InfoNotice
              message={clinic.infoNotice.message}
              secondaryMessage={clinic.infoNotice.secondaryMessage}
            />
          )}

          {/* Feature groups */}
          {clinic.featureGroups?.map((group, i) => (
            <div key={i} className="mt-5 flex flex-wrap gap-2">
              {group.map((feature) => (
                <FeatureBadge
                  key={feature.label}
                  icon={feature.icon}
                  label={feature.label}
                  color={feature.color}
                />
              ))}
            </div>
          ))}

          {/* CTA */}
          <div className="mt-auto">
            <BackLink
              href={paths.app.contact.getHref()}
              label="Megnyitás"
              iconPosition="end"
              hoverDirection="right"
              variant={clinic.variant}
              className="mt-6"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
