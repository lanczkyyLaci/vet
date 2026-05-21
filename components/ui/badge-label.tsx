import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface BadgeLabelProps {
  icon?: LucideIcon;
  label: string;
  className?: string;
}

export function BadgeLabel({ icon: Icon, label, className }: BadgeLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
        className,
      )}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
    </div>
  );
}
