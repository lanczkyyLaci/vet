import {
  AlertTriangle,
  Heart,
  Home,
  Link2,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

export const rules = [
  {
    icon: ShieldCheck,
    title: "Dokumentumok es azonositas",
    color: "blue",
    content:
      "Az allattartonak rendelkeznie kell a kotelezo immunizalasra vonatkozo mindenkori adatokkal es dokumentumokkal, egyedi tartos megjelolessel rendelkezo allat eseteben az allat azonositasara vonatkozo adatokkal es dokumentumokkal is. Amennyiben az allat uj tulajdonoshoz kerul, reszere e dokumentumokat at kell adni.",
  },
  {
    icon: Home,
    title: "Tartasi hely ellenorzese",
    color: "teal",
    content:
      "Az allat tartasi helyet az allat tartojanak naponta legalabb egy alkalommal ellenorizni kell. Az allattartonak gondoskodnia kell arrol, hogy az allatok tartasi helyen a kornyezeti viszonyok megfeleljenek az allatok szuksgleteinek.",
  },
  {
    icon: AlertTriangle,
    title: "Tilos",
    color: "red",
    items: [
      "Ebet tartosan 10 m²-nel kisebb teruleten tartani",
      "Ebet tartosan 4 m-nel rovidebb eszközzel kikotve tartani",
      "Ebet allando jelleggel kikotve tartani",
    ],
  },
  {
    icon: Users,
    title: "Csoportos tartas",
    color: "indigo",
    content:
      "Ebek csoportos tartasa eseten szamukra egyedenkent legalabb 6 m² akadalytalanul hasznalhato teruletet kell biztositani. Nem minosul csoportos tartasnak a szuka egyutt tartasa a kolykeivel, azok hathetes koraig.",
  },
  {
    icon: Link2,
    title: "Futolanc hasznalata",
    color: "amber",
    content:
      "Amennyiben ebet futolánccal kikotve tartanak, a feszitett es futo reszek hosszanak osszege nem lehet kevesebb 5 m-nel, valamint a futo resz nem lehet rovidebb 3 m-nel. Az ebek kikotesehez, illetve vezetesehez hasznalt eszkozoknek az allatra torteno rogzitesere kizarolag nyakorv vagy ham hasznalhato.",
  },
  {
    icon: MapPin,
    title: "Kozteruleten",
    color: "cyan",
    items: [
      "Belterulet kozteruleten ebet csak porazon lehet vezetni",
      "Kozteruleten ebet csak olyan szemely vezethet, aki az eb iranyitasara, kezelesere es feken tartasara kepes",
      "Az eb tulajdonosanak biztositania kell, hogy az eb sem mas allatot, sem embert harapasaval ne veszelyeztethessen",
    ],
  },
  {
    icon: Heart,
    title: "Kimeletes banas",
    color: "rose",
    content:
      "A kedvtelesbol tartott allatokkal kimeletesen kell banni, azoknak szukségtelenul fajdalmat, szenvedest, illetve felelemet okozni nem szabad. Meg kell akadalyozni azon allatok szaporodasat, amelyeken olyan kullemi, illetve viselkedesbeli hibak fordulnak elo, melyek szenvedest okozhanak az utodaiknak.",
  },
];
