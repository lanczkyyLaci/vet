import {
  Bug,
  Car,
  CreditCard,
  Database,
  Pill,
  Scissors,
  Shield,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";

export const services = [
  {
    id: "vedooltasok",
    title: "Vedooltasok beadasa",
    subtitle: "Oltasi programok",
    icon: Syringe,
    color: "blue",
    description:
      "Mellettunk elo allatainkat, kedvenceinket tobb betegseg is fenyegeti amelyeket a kornyezetbol, beteg allatokkal, vagy azok testvaladekaival talalkozva kaphatnak el.",
    details: [
      "Kombinalt oltasok tobb betegseg ellen",
      "Egyedi oltasi programok kialakitasa",
      "Evenkenti ismetles ajanlott",
      "Kolykek oltasa 6-8 hetes kortol",
      "Oltasi konyv vezetese",
    ],
  },
  {
    id: "fereghajtas",
    title: "Fereghajtas",
    subtitle: "Rendszeres parazita mentesites",
    icon: Bug,
    color: "green",
    description:
      "Husevo allatainkban fonal es galandfergek is elofordulhatnak. A kifejlett fergek a belben eloskodve tapanyagokat vonnak el a gazdaszervezettol.",
    details: [
      "Evente legalabb 2-4 alkalommal ajanlott",
      "Veszettség oltasnal kotelezo",
      "Minden husevo allatot egyszerre kezelunk",
      "Allatorvosi gyogyszerek hasznalata",
      "Emberekre is veszelyes lehet a fertozes",
    ],
  },
  {
    id: "bolha-kullancs",
    title: "Bolha es kullancs elleni kezelesek",
    subtitle: "Kulso parazitak ellen",
    icon: Shield,
    color: "teal",
    description:
      "A bolhak es a kullancsok egesz evben nyugtalanithatjak kedvencet, belfergesseger, tobb veszelyes betegseget is okozhatnak.",
    details: [
      "Babesiosis elleni vedelem",
      "Lyme kor megelozese",
      "Nyakorvek es cseppek",
      "Egesz eves vedelem",
      "Szeles termekvalasztek",
    ],
  },
  {
    id: "veszettség",
    title: "Veszettség oltas",
    subtitle: "Kotelezo vedooltas",
    icon: Shield,
    color: "red",
    description:
      "A veszettség a legveszelyesebb fertozo betegseg ami hazi es vadon elo allatokat es az embert is megbetegitheti. Magyarorszagon kotelezo a kutyak veszettség elleni oltasa.",
    details: [
      "3 honapos kortol kotelezo",
      "Evente ismetlendo",
      "Oltasi konyvben dokumentalva",
      "Torveny altal szabalyozott",
      "Tulajdonos felelossege",
    ],
  },
  {
    id: "ivartalanitas",
    title: "Ivartalanitas",
    subtitle: "Szuleszeti beavatkozasok",
    icon: Scissors,
    color: "purple",
    description:
      "Kedtelesbol tartott allatainknal elsodleges fontossagu a nem kivant szaporulat elkerulese. Allataink hosszabb, egeszsaegesebb eletet elhetnek.",
    details: [
      "Csaszarmetszes",
      "Him es nosteny ivartalanitas",
      "6-9 honapos korban idealis",
      "8 napos gyogyulasi ido",
      "Daganatos betegsegek megelozese",
    ],
  },
  {
    id: "muszeres",
    title: "Muszeres vizsgalatok",
    subtitle: "UH vemhessegvizsgalat, RTG",
    icon: Stethoscope,
    color: "indigo",
    description:
      "Ultrahangos keszulekkel vemhessegvizsgalat vegezheto, RTG keszulekkel a csontok seruleseo, elvaltozasai vizsgalhatok.",
    details: [
      "Ultrahangos vizsgalat",
      "RTG felvetelek",
      "Vemhessegvizsgalat",
      "Csontseulesek diagnosztizalasa",
      "Modern diagnosztikai eszkozok",
    ],
  },
  {
    id: "fogko",
    title: "Ultrahangos fogkoeltavolitas",
    subtitle: "Fogapolas",
    icon: Sparkles,
    color: "cyan",
    description:
      "Sok allatnal a helytelen taplaalek fogkokepzodessel jaro komoly elvaltozasokat okozhat. Lehetoseg van a fogkovek ultrahangos eltavolitasara.",
    details: [
      "Kimeletes eltavolitas",
      "Buzos lehelet megszuntetese",
      "Foggyoker gyulladas megelozese",
      "Altalanos allapot javitasa",
      "Modern ultrahangos keszulek",
    ],
  },
  {
    id: "microchip",
    title: "Kutyautlevel, Microchip",
    subtitle: "Azonositas es dokumentacio",
    icon: CreditCard,
    color: "amber",
    description:
      "A kutyak microchippel valo megjelolese kotelezo tulajdonosvaltas elott. A chiphez kulon kiivalthato kisallat utlevel kulfoldi utazasokhoz.",
    details: [
      "Microchip beuletes",
      "Kisallat utlevel kiallitasa",
      "Nemzetkozi adatbazisba regisztracio",
      "Elveszett allatok azonositasa",
      "www.petvetdata.hu regisztracio",
    ],
  },
  {
    id: "kiszallas",
    title: "Kiszallas",
    subtitle: "Helyszini ellatas",
    icon: Car,
    color: "orange",
    description:
      "Egyszerubb beavatkozasokat az allat tartasi helyen is elvegezzuk, peldaul vedooltasok beadasa.",
    details: [
      "Vedooltasok beadasa helyszinen",
      "Egyszerubb vizsgalatok",
      "Rugalmas idopontok",
      "Kenyelmes megoldas",
      "Stresszmentes az allatnak",
    ],
  },
  {
    id: "nyilvantartas",
    title: "Szamitogepes nyilvantartas",
    subtitle: "Digitalis adatkezeles",
    icon: Database,
    color: "slate",
    description:
      "Az allatokat szamitogepes nyilvantartasba vesszuk, ahonnan konnyen visszakeresheto az allat kortortenete.",
    details: [
      "Teljes kortortenet",
      "Oltasi elozmennyek",
      "Kezelesek nyomon kovetese",
      "Gyors adatlekeardezes",
      "Biztonsagos adattarolas",
    ],
  },
  {
    id: "gyogyszerek",
    title: "Allatgyogyszerek",
    subtitle: "Gyogyszertar",
    icon: Pill,
    color: "emerald",
    description:
      "Allatgyogyszerek szeles valaszteka folyamatosan megvasarolhato, a keszleten nem levok megrendelhetoek.",
    details: [
      "Bolha es kullancsellenes szerek",
      "Csonterositok",
      "Vitaminok",
      "Gyogyszerek megrendelese",
      "Szakerto tanacsadas",
    ],
  },
];
