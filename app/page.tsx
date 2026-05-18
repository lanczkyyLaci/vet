import Link from "next/link"
import {
  Stethoscope,
  PawPrint,
  ShieldCheck,
  Microscope,
  ArrowRight,
  Syringe,
  HeartPulse,
  Scissors,
} from "lucide-react"
import { BackLink } from "@/components/back-link/back-link"
import { PageWrapper } from "@/components/layouts/page-wrapper/page-wrapper"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function Page() {
  return (
      <PageWrapper className="px-0 py-0">
        {/* HERO */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-blue-700 shadow-sm">
                Modern állatorvosi ellátás
              </div>

              <h1 className="text-5xl font-bold leading-tight tracking-tight text-slate-900">
                Kastélydomb Állatorvosi Rendelő és
                <span className="block text-blue-600">
                Nagy- és Kisállat Parazitológia
              </span>
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Professzionális állatorvosi ellátás, diagnosztika és
                parazitológiai vizsgálatok modern környezetben,
                kis- és nagyállatok számára.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <BackLink
                    href="#valasszon-rendelot"
                    label="Válasszon rendelőt"
                    iconPosition="end"
                    hoverDirection="right"
                    className="mb-0 rounded-md bg-blue-600 px-6 py-3 font-medium text-white shadow-lg transition hover:bg-blue-700 hover:text-white w-full md:w-auto text-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SELECT SECTION */}
        <section id="valasszon-rendelot" className="scroll-mt-6 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900">
                Válasszon rendelőt
              </h2>

              <p className="mt-4 text-slate-600">
                A kiválasztott felület később bármikor módosítható.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* CARD 1 */}
              <Link href="/kastelydomb" className="group">
                <Card className="h-full rounded-md border-2 border-blue-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl">
                  <CardHeader className="space-y-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-100">
                      <Stethoscope className="h-8 w-8 text-blue-600" />
                    </div>

                    <div>
                      <CardTitle className="text-xl">
                        Kastélydomb Állatorvosi Rendelő
                      </CardTitle>

                      <CardDescription className="mt-4 text-base leading-7">
                        Általános állatorvosi ellátás, vizsgálatok és kezelések
                        modern rendelői környezetben.
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2 font-medium text-blue-600">
                      Megnyitás
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>

              {/* CARD 2 */}
              <Link href="/parazitologia" className="group">
                <Card className="h-full rounded-md border-2 border-blue-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-2xl">
                  <CardHeader className="space-y-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-100">
                      <PawPrint className="h-8 w-8 text-blue-600" />
                    </div>

                    <div>
                      <CardTitle className="text-xl">
                        Nagy- és Kisállat Parazitológia
                      </CardTitle>

                      <CardDescription className="mt-4 text-base leading-7">
                        Parazitológiai vizsgálatok, laboreredmények és kezelési
                        lehetőségek állatok számára.
                      </CardDescription>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center gap-2 font-medium text-blue-600">
                      Megnyitás
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-6 py-10">
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
                    Kötelező és ajánlott védőoltások, rendszeres féreghajtó kezelések.
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
                    Kisállat sebészeti beavatkozások, ivartalanítás és egyéb műtétek.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>


      </PageWrapper>
  )
}