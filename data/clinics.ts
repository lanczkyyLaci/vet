import {
  PawPrint,
  Stethoscope,
  Award,
  Building2,
  Syringe,
  Bug,
  Scissors,
  HeartPulse,
  MonitorSpeaker,
  Sparkle,
  Cpu,
  FileText,
  BookOpen,
  Truck,
} from "lucide-react";
import { type ClinicData } from "@/types/clinic";

export const clinics: ClinicData[] = [
  {
    href: "/kisesnagyallat",
    image: "/small-large-animals.webp",
    imageAlt: "Kis- és Nagyállat Rendelő",
    badgeIcon: PawPrint,
    badgeLabel: "Magánrendelő",
    doctorName: "Dr. Török Tamás",
    contentIcon: Stethoscope,
    titleBadge: "Magánrendelő",
    title: "Kis- és Nagyállat Rendelő",
    address: "8161 Ősi Ladányi u. 17",
    description:
      "Teljes körű állatorvosi ellátás kutyák, macskák és lovak számára. Vizsgálatok, kezelések és megelőzés.",
    variant: "blue",
    infoNotice: {
      message:
        "A délutáni Kisállat rendelés Várpalotán, a Kastélydomb Állatorvosi Rendelőben elérhető!",
      secondaryMessage:
        "Ősiben csak előre megbeszélt időpontban működik a kisállatok ellátása!",
    },
  },
  {
    href: "/hivatalos",
    image: "/official-clinic.webp",
    imageAlt: "Hivatalos Állatorvosi Rendelő",
    badgeIcon: Award,
    badgeLabel: "Kastélydomb Állatorvosi Rendelő",
    doctorName: "Dr. Török Tamás",
    contentIcon: Building2,
    title: "Hivatalos Állatorvosi Rendelő",
    address: "8100 Várpalota, Mandulás lakótelep 34,",
    description:
      "Hivatalos állatorvosi igazolások, útlevelek, export-import dokumentumok és határozatok.",
    variant: "teal",
    featureGroups: [
      [
        { icon: Syringe, label: "Védőoltások", color: "blue" },
        { icon: Bug, label: "Féreghajtás", color: "indigo" },
        { icon: Scissors, label: "Sebészet", color: "cyan" },
        { icon: HeartPulse, label: "Belgyógyászat", color: "sky" },
        { icon: MonitorSpeaker, label: "UH vizsgálat", color: "blue" },
        { icon: Sparkle, label: "Fogkőeltávolítás", color: "indigo" },
        { icon: Cpu, label: "Microchip", color: "cyan" },
      ],
      [
        { icon: FileText, label: "Igazolások", color: "teal" },
        { icon: BookOpen, label: "Útlevelek", color: "emerald" },
        { icon: Truck, label: "Export-Import", color: "cyan" },
      ],
    ],
  },
];
