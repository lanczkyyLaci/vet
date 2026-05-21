import {
  Stethoscope,
  Microscope,
  ShieldCheck,
  Syringe,
  HeartPulse,
  Scissors,
} from "lucide-react";
import { type ServiceData } from "@/types/service";

export const services: ServiceData[] = [
  {
    icon: Stethoscope,
    title: "Általános Vizsgálatok",
    description: "Teljes körű állatorvosi vizsgálatok és kezelések.",
  },
  {
    icon: Microscope,
    title: "Labor és Diagnosztika",
    description: "Modern laborvizsgálatok és parazitológiai elemzések.",
  },
  {
    icon: ShieldCheck,
    title: "Megelőzés és Tanácsadás",
    description: "Védőoltások, megelőző kezelések és szakmai tanácsadás.",
  },
  {
    icon: Syringe,
    title: "Oltások és Féreghajtás",
    description:
      "Kötelező és ajánlott védőoltások, rendszeres féreghajtó kezelések.",
  },
  {
    icon: HeartPulse,
    title: "Sürgősségi Ellátás",
    description:
      "Azonnali állatorvosi segítség sürgős esetekben, baleseteknél.",
  },
  {
    icon: Scissors,
    title: "Sebészet és Műtétek",
    description:
      "Kisállat sebészeti beavatkozások, ivartalanítás és egyéb műtétek.",
  },
];
