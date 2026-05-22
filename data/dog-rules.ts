import {
  Scale,
  AlertTriangle,
  Home,
  Dog,
  Users,
  Link2,
  MapPin,
  Heart,
  ShieldCheck,
} from "lucide-react";

export const dogRules = [
  {
    icon: ShieldCheck,
    title: "Dokumentumok és azonosítás",
    color: "blue",
    content:
      "Az állattartónak rendelkeznie kell a kötelező immunizálásra vonatkozó mindenkori adatokkal és dokumentumokkal, egyedi tartós megjelöléssel rendelkező állat esetében az állat azonosítására vonatkozó adatokkal és dokumentumokkal is. Amennyiben az állat új tulajdonoshoz kerül, részére e dokumentumokat át kell adni.",
  },
  {
    icon: Home,
    title: "Tartási hely ellenőrzése",
    color: "teal",
    content:
      "Az állat tartási helyét az állat tartójának naponta legalább egy alkalommal ellenőriznie kell. Az állattartónak gondoskodnia kell arról, hogy az állatok tartási helyén a környezeti viszonyok megfeleljenek az állatok szükségleteinek.",
  },
  {
    icon: AlertTriangle,
    title: "Tilos",
    color: "red",
    items: [
      "Ebet tartósan 10 m²-nél kisebb területen tartani",
      "Ebet tartósan 4 m-nél rövidebb eszközzel kikötve tartani",
      "Ebet állandó jelleggel kikötve tartani",
    ],
  },
  {
    icon: Users,
    title: "Csoportos tartás",
    color: "indigo",
    content:
      "Ebek csoportos tartása esetén számukra egyedenként legalább 6 m² akadálytalanul használható területet kell biztosítani. Nem minősül csoportos tartásnak a szuka együtt tartása a kölykeivel, azok hathónapos koráig.",
  },
  {
    icon: Link2,
    title: "Futólánc használata",
    color: "amber",
    content:
      "Amennyiben ebet futólánccal kikötve tartanak, a feszített és futó részek hosszának összege nem lehet kevesebb 5 m-nél, valamint a futó rész nem lehet rövidebb 3 m-nél. Az ebek kikötéséhez, illetve vezetéséhez használt eszközöknek az állatra történő rögzítésére kizárólag nyakörv vagy hám használható.",
  },
  {
    icon: MapPin,
    title: "Közterületen",
    color: "cyan",
    items: [
      "Belterület közterületén ebet csak pórázon lehet vezetni",
      "Közterületen ebet csak olyan személy vezethet, aki az eb irányítására, kezelésére és féken tartására képes",
      "Az eb tulajdonosának biztosítania kell, hogy az eb sem más állatot, sem embert harapásával ne veszélyeztethessen",
    ],
  },
  {
    icon: Heart,
    title: "Kíméletes bánásmód",
    color: "rose",
    content:
      "A kedvtelésből tartott állatokkal kíméletesen kell bánni, azoknak szükségtelenül fájdalmat, szenvedést, illetve félelmet okozni nem szabad. Meg kell akadályozni azon állatok szaporodását, amelyeken olyan küllemi, illetve viselkedésbeli hibák fordulnak elő, melyek szenvedést okozhatnak az utódaiknak.",
  },
];

export const dogRulesColorClasses: Record<
  string,
  { bg: string; text: string; ring: string; iconBg: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    ring: "ring-blue-100",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    ring: "ring-teal-100",
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-600",
    ring: "ring-red-100",
    iconBg: "bg-gradient-to-br from-red-500 to-red-600",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    ring: "ring-indigo-100",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    ring: "ring-amber-100",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    ring: "ring-cyan-100",
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-600",
    ring: "ring-rose-100",
    iconBg: "bg-gradient-to-br from-rose-500 to-rose-600",
  },
};
