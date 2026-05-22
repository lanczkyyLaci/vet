import {
  Syringe,
  Bug,
  Shield,
  Scissors,
  Stethoscope,
  Sparkles,
  CreditCard,
  Car,
  Database,
  Pill,
} from "lucide-react";

export const petServices = [
  {
    id: "vedooltasok",
    title: "Védőoltások beadása",
    subtitle: "Oltási programok",
    icon: Syringe,
    color: "blue",
    description:
      "Mellettünk élő állatainkat, kedvenceinket több betegség is fenyegeti, amelyeket a környezetből, beteg állatokkal vagy azok testváladékaival találkozva kaphatnak el.",
    details: [
      "Kombinált oltások több betegség ellen",
      "Egyedi oltási programok kialakítása",
      "Évenkénti ismétlés ajánlott",
      "Kölykök oltása 6–8 hetes kortól",
      "Oltási könyv vezetése",
    ],
  },
  {
    id: "fereghajtas",
    title: "Féreghajtás",
    subtitle: "Rendszeres parazitamentesítés",
    icon: Bug,
    color: "green",
    description:
      "Húsevő állatainkban fonál- és galandférgek is előfordulhatnak. A kifejlett férgek a bélben élősködve tápanyagokat vonnak el a gazdaszervezettől.",
    details: [
      "Évente legalább 2–4 alkalommal ajánlott",
      "Veszettség oltásnál kötelező",
      "Minden húsevő állatot egyszerre kezelünk",
      "Állatorvosi gyógyszerek használata",
      "Emberekre is veszélyes lehet a fertőzés",
    ],
  },
  {
    id: "bolha-kullancs",
    title: "Bolha és kullancs elleni kezelések",
    subtitle: "Külső paraziták ellen",
    icon: Shield,
    color: "teal",
    description:
      "A bolhák és a kullancsok egész évben nyugtalaníthatják kedvencét, bélférgességet és több veszélyes betegséget is okozhatnak.",
    details: [
      "Babesiosis elleni védelem",
      "Lyme-kór megelőzése",
      "Nyakörvek és cseppek",
      "Egész éves védelem",
      "Széles termékválaszték",
    ],
  },
  {
    id: "veszettseg",
    title: "Veszettség oltás",
    subtitle: "Kötelező védőoltás",
    icon: Shield,
    color: "red",
    description:
      "A veszettség a legveszélyesebb fertőző betegség, ami házi- és vadon élő állatokat, valamint az embert is megbetegítheti. Magyarországon kötelező a kutyák veszettség elleni oltása.",
    details: [
      "3 hónapos kortól kötelező",
      "Évente ismétlendő",
      "Oltási könyvben dokumentálva",
      "Törvény által szabályozott",
      "Tulajdonosi felelősség",
    ],
  },
  {
    id: "ivartalanitas",
    title: "Ivartalanítás",
    subtitle: "Szülészeti beavatkozások",
    icon: Scissors,
    color: "purple",
    description:
      "Kedvtelésből tartott állatainknál elsődleges fontosságú a nem kívánt szaporulat elkerülése. Állataink hosszabb, egészségesebb életet élhetnek.",
    details: [
      "Császármetszés",
      "Hím és nőstény ivartalanítás",
      "6–9 hónapos korban ideális",
      "8 napos gyógyulási idő",
      "Daganatos betegségek megelőzése",
    ],
  },
  {
    id: "muszeres",
    title: "Műszeres vizsgálatok",
    subtitle: "UH vemhességvizsgálat, RTG",
    icon: Stethoscope,
    color: "indigo",
    description:
      "Ultrahangos készülékkel vemhességvizsgálat végezhető, RTG készülékkel a csontok sérülései és elváltozásai vizsgálhatók.",
    details: [
      "Ultrahangos vizsgálat",
      "RTG felvételek",
      "Vemhességvizsgálat",
      "Csontsérülések diagnosztizálása",
      "Modern diagnosztikai eszközök",
    ],
  },
  {
    id: "fogko",
    title: "Ultrahangos fogkőeltávolítás",
    subtitle: "Fogápolás",
    icon: Sparkles,
    color: "cyan",
    description:
      "Sok állatnál a helytelen táplálék fogkőképződéssel járó komoly elváltozásokat okozhat. Lehetőség van a fogkövek ultrahangos eltávolítására.",
    details: [
      "Kíméletes eltávolítás",
      "Bűzös lehelet megszüntetése",
      "Foggyökér-gyulladás megelőzése",
      "Általános állapot javítása",
      "Modern ultrahangos készülék",
    ],
  },
  {
    id: "microchip",
    title: "Kutyaútlevél, Microchip",
    subtitle: "Azonosítás és dokumentáció",
    icon: CreditCard,
    color: "amber",
    description:
      "A kutyák microchippel való megjelölése kötelező tulajdonosváltás előtt. A chiphez külön kiváltható kisállat útlevél külföldi utazásokhoz.",
    details: [
      "Microchip beültetés",
      "Kisállat útlevél kiállítása",
      "Nemzetközi adatbázisba regisztráció",
      "Elveszett állatok azonosítása",
      "www.petvetdata.hu regisztráció",
    ],
  },
  {
    id: "kiszallas",
    title: "Kiszállás",
    subtitle: "Helyszíni ellátás",
    icon: Car,
    color: "orange",
    description:
      "Egyszerűbb beavatkozásokat az állat tartási helyén is elvégezzük, például védőoltások beadását.",
    details: [
      "Védőoltások beadása helyszínen",
      "Egyszerűbb vizsgálatok",
      "Rugalmas időpontok",
      "Kényelmes megoldás",
      "Stresszmentes az állatnak",
    ],
  },
  {
    id: "nyilvantartas",
    title: "Számítógépes nyilvántartás",
    subtitle: "Digitális adatkezelés",
    icon: Database,
    color: "slate",
    description:
      "Az állatokat számítógépes nyilvántartásba vesszük, ahonnan könnyen visszakereshető az állat kórtörténete.",
    details: [
      "Teljes kórtörténet",
      "Oltási előzmények",
      "Kezelések nyomon követése",
      "Gyors adatlekérdezés",
      "Biztonságos adattárolás",
    ],
  },
  {
    id: "gyogyszerek",
    title: "Állatgyógyszerek",
    subtitle: "Gyógyszertár",
    icon: Pill,
    color: "emerald",
    description:
      "Állatgyógyszerek széles választéka folyamatosan megvásárolható, a készleten nem lévők megrendelhetők.",
    details: [
      "Bolha- és kullancsellenes szerek",
      "Csonterősítők",
      "Vitaminok",
      "Gyógyszerek megrendelése",
      "Szakértő tanácsadás",
    ],
  },
];

export const petColorClasses: Record<
  string,
  { bg: string; text: string; ring: string; iconBg: string; bullet: string }
> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    ring: "ring-blue-200",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    bullet: "bg-blue-500",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-700",
    ring: "ring-green-200",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    bullet: "bg-green-500",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    ring: "ring-teal-200",
    iconBg: "bg-gradient-to-br from-teal-500 to-teal-600",
    bullet: "bg-teal-500",
  },
  red: {
    bg: "bg-red-50",
    text: "text-red-700",
    ring: "ring-red-200",
    iconBg: "bg-gradient-to-br from-red-500 to-red-600",
    bullet: "bg-red-500",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-700",
    ring: "ring-purple-200",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    bullet: "bg-purple-500",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-700",
    ring: "ring-indigo-200",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    bullet: "bg-indigo-500",
  },
  cyan: {
    bg: "bg-cyan-50",
    text: "text-cyan-700",
    ring: "ring-cyan-200",
    iconBg: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    bullet: "bg-cyan-500",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    ring: "ring-amber-200",
    iconBg: "bg-gradient-to-br from-amber-500 to-amber-600",
    bullet: "bg-amber-500",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-700",
    ring: "ring-orange-200",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    bullet: "bg-orange-500",
  },
  slate: {
    bg: "bg-slate-50",
    text: "text-slate-700",
    ring: "ring-slate-200",
    iconBg: "bg-gradient-to-br from-slate-500 to-slate-600",
    bullet: "bg-slate-500",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    ring: "ring-emerald-200",
    iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    bullet: "bg-emerald-500",
  },
};
