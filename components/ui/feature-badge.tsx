import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

const colorClasses = {
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100",
  cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  sky: "bg-sky-50 text-sky-700 ring-sky-100",
  teal: "bg-teal-50 text-teal-700 ring-teal-100",
  emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
} as const;

type FeatureBadgeColor = keyof typeof colorClasses;

interface FeatureBadgeProps {
  icon: LucideIcon;
  label: string;
  color: FeatureBadgeColor;
  className?: string;
}

export function FeatureBadge({
  icon: Icon,
  label,
  color,
  className,
}: FeatureBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium ring-1",
        colorClasses[color],
        className,
      )}
    >
      <Icon className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
