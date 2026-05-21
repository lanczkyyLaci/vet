import { type LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  label: string;
  color: "blue" | "indigo" | "cyan" | "sky" | "teal" | "emerald";
}

export interface ClinicData {
  href: string;
  image: string;
  imageAlt: string;
  badgeIcon: LucideIcon;
  badgeLabel: string;
  doctorName: string;
  contentIcon: LucideIcon;
  titleBadge?: string;
  title: string;
  address: string;
  description: string;
  variant: "blue" | "teal";
  infoNotice?: {
    message: string;
    secondaryMessage?: string;
  };
  featureGroups?: FeatureItem[][];
}
