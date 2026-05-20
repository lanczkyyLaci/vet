import Link from "next/link";
import {
  Stethoscope,
  PawPrint,
  ShieldCheck,
  Microscope,
  ArrowRight,
  Syringe,
  HeartPulse,
  Scissors,
  MapPin,
  Award,
  Building2,
  UserRound,
} from "lucide-react";
import { BackLink } from "@/components/back-link/back-link";
import { PageWrapper } from "@/components/layouts/page-wrapper/page-wrapper";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { paths } from "@/config/paths";
import { Section } from "@/components/layouts/section/section";
import Image from "next/image";
import { Title } from "@/components/ui/title";

export default function Page() {
  return (
    <PageWrapper>
      {/* HERO */}
      <Section id="hero">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-blue-700 shadow-sm">
              Modern állatorvosi ellátás
            </div>

            <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 md:text-5xl">
              Kastélydomb Állatorvosi Rendelő és
              <span className="block text-blue-600">
                Nagy- és Kisállat parxis
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Professzionális állatorvosi ellátás, diagnosztika és
              parazitológiai vizsgálatok modern környezetben, kis- és
              nagyállatok számára.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <BackLink
                href="#valasszon-rendelot"
                label="Válasszon rendelőt"
                iconPosition="end"
                hoverDirection="right"
                variant="blue"
              />

              <BackLink
                href={paths.app.contact.getHref()}
                label="Kapcsolat"
                iconPosition="end"
                hoverDirection="right"
                variant="outline"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* SELECT SECTION */}
      <Section id="valasszon-rendelot" className="scroll-mt-1">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <Title
              as="h2"
              size="lg"
              title="Válasszon rendelőt"
              variant="blue"
            />
            <p className="mt-4 text-slate-600">
              A kiválasztott felület később bármikor módosítható.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* CARD 1 */}
            <Link href="/kisesnagyallat" className="group">
              <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-xl ring-1 shadow-blue-900/5 ring-slate-200/50 transition-all duration-500 [backface-visibility:hidden] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 hover:ring-blue-300/50">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden [backface-visibility:hidden]">
                  <Image
                    src="/small-large-animals.webp"
                    alt="Kis- es Nagyallat Rendelo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/*<div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />*/}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/10 mix-blend-multiply" />

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-lg backdrop-blur-sm">
                    <PawPrint className="h-3.5 w-3.5" />
                    Kis- es nagyallatok
                  </div>

                  {/* Doctor name badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-2 py-2 shadow-lg ring-1 ring-blue-100 backdrop-blur-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                      <UserRound className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      Dr. Torok Tamas
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="absolute -top-8 right-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg ring-4 shadow-blue-500/30 ring-white transition-transform duration-300 group-hover:scale-110">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>

                  <div className="pr-16">
                    <h3 className="text-xl font-bold text-slate-900">
                      Kis- es Nagyallat Rendelo
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span>1234 Budapest, Pelda utca 12.</span>
                    </div>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      Teljes koru allatorvosi ellatas kutyak, macskak es lovak
                      szamara. Vizsgalatok, kezelesek es megelozes.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      Kutya
                    </span>
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                      Macska
                    </span>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                      Lo
                    </span>
                  </div>
                  {/* CTA */}
                  <BackLink
                    href={paths.app.contact.getHref()}
                    label="Megnyitas"
                    iconPosition="end"
                    hoverDirection="right"
                    variant="blue"
                    className="mt-6"
                  />
                </div>
              </div>
            </Link>

            {/* CARD 2 */}
            <Link href="/hivatalos" className="group">
              <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-xl ring-1 shadow-teal-900/5 ring-slate-200/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/20 hover:ring-teal-300/50">
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src="/official-clinic.webp"
                    alt="Hivatalos Allatorvosi Rendelo"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-600/10 mix-blend-multiply" />

                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-teal-700 shadow-lg backdrop-blur-sm">
                    <Award className="h-3.5 w-3.5" />
                    Hivatalos dokumentumok
                  </div>

                  {/* Doctor name badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-2 py-2 shadow-lg ring-1 ring-blue-100 backdrop-blur-sm">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-600">
                      <UserRound className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      Dr. Torok Tamas
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-6">
                  {/* Icon */}
                  <div className="absolute -top-8 right-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg ring-4 shadow-teal-500/30 ring-white transition-transform duration-300 group-hover:scale-110">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>

                  <div className="pr-16">
                    <h3 className="text-xl font-bold text-slate-900">
                      Hivatalos Allatorvosi Rendelo
                    </h3>
                    <div className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      <span>1234 Budapest, Masik utca 45.</span>
                    </div>
                    <p className="mt-3 leading-relaxed text-slate-600">
                      Hivatalos allatorvosi igazolasok, utlevelek, export-import
                      dokumentumok es hatarozatok.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700">
                      Igazolasok
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Utlevelek
                    </span>
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                      Export-Import
                    </span>
                  </div>

                  {/* CTA */}
                  <BackLink
                    href={paths.app.contact.getHref()}
                    label="Megnyitas"
                    iconPosition="end"
                    hoverDirection="right"
                    variant="teal"
                    className="mt-6"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="szolgaltatasok">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Szolgáltatásaink
            </h2>

            <p className="mt-4 text-slate-600">
              Korszerű diagnosztika és állatorvosi ellátás.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-blue-100 bg-white shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                  <Stethoscope className="h-7 w-7 text-blue-600" />
                </div>

                <CardTitle>Általános Vizsgálatok</CardTitle>

                <CardDescription className="text-base">
                  Teljes körű állatorvosi vizsgálatok és kezelések.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                  <Microscope className="h-7 w-7 text-blue-600" />
                </div>

                <CardTitle>Labor és Diagnosztika</CardTitle>

                <CardDescription className="text-base">
                  Modern laborvizsgálatok és parazitológiai elemzések.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-blue-100">
                  <ShieldCheck className="h-7 w-7 text-blue-600" />
                </div>

                <CardTitle>Megelőzés és Tanácsadás</CardTitle>

                <CardDescription className="text-base">
                  Védőoltások, megelőző kezelések és szakmai tanácsadás.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-blue-100">
                  <Syringe className="h-7 w-7 text-blue-600" />
                </div>

                <CardTitle>Oltások és Féreghajtás</CardTitle>

                <CardDescription className="text-base">
                  Kötelező és ajánlott védőoltások, rendszeres féreghajtó
                  kezelések.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-blue-100">
                  <HeartPulse className="h-7 w-7 text-blue-600" />
                </div>

                <CardTitle>Sürgősségi Ellátás</CardTitle>

                <CardDescription className="text-base">
                  Azonnali állatorvosi segítség sürgős esetekben, baleseteknél.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 bg-white shadow-md">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-blue-100">
                  <Scissors className="h-7 w-7 text-blue-600" />
                </div>

                <CardTitle>Sebészet és Műtétek</CardTitle>

                <CardDescription className="text-base">
                  Kisállat sebészeti beavatkozások, ivartalanítás és egyéb
                  műtétek.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </Section>
    </PageWrapper>
  );
}
