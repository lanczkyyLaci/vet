import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variantClasses = {
  blue: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-xl hover:shadow-blue-500/30",
  teal: "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-teal-800 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-xl hover:shadow-blue-500/30",
  outline:
    "group inline-flex items-center gap-2 rounded-xl border-2 border-blue-200 bg-white/80 px-6 py-3.5 font-semibold text-blue-700 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md",
} as const;

type BackLinkVariant = keyof typeof variantClasses;

interface BackLinkProps {
  href: string;
  label: string;
  /** Az ikon pozíciója: "start" (szöveg előtt) vagy "end" (szöveg után) */
  iconPosition?: "start" | "end";
  /** Hover irány: "left" (balra mozdul) vagy "right" (jobbra mozdul) */
  hoverDirection?: "left" | "right";
  /** Előre definiált stílus variáns */
  variant?: BackLinkVariant;
  className?: string;
  ariaLabel?: string;
}

export const BackLink = ({
  href,
  label,
  iconPosition = "start",
  hoverDirection = "left",
  variant,
  className,
  ariaLabel,
}: BackLinkProps) => {
  const Icon = iconPosition === "start" ? ArrowLeft : ArrowRight;
  const variantClass = variant ? variantClasses[variant] : undefined;

  const iconElement = (
    <Icon
      className={cn(
        "h-4 w-4 transition-transform duration-150",
        hoverDirection === "left"
          ? "group-hover:-translate-x-1"
          : "group-hover:translate-x-1"
      )}
    />
  );

  const isAnchor = href.startsWith("#");
  const Comp = isAnchor ? "a" : Link;

  return (
    <Comp
      href={href}
      className={cn(
        "group text-md inline-flex h-14 w-full items-center gap-2 font-medium text-slate-600 transition hover:text-blue-600 md:h-auto md:w-auto md:text-sm",
        variantClass,
        className
      )}
      aria-label={ariaLabel ?? label}
    >
      {iconPosition === "start" && iconElement}
      {label}
      {iconPosition === "end" && iconElement}
    </Comp>
  );
};
