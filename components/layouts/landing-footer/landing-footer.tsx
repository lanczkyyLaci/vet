import Link from "next/link"
import {
    Stethoscope,
    PawPrint,
    Phone,
    MapPin,
    Mail,
    BadgeInfo
} from "lucide-react"

export const LandingFooter = () => {
    return (
        <footer className="border-t border-blue-100 bg-white">
            <div className="mx-auto max-w-6xl px-6 py-14">

                <div className="grid gap-12 md:grid-cols-3">

                    {/* LEFT */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            Állatorvosi Rendszer
                        </h3>

                        <p className="mt-4 leading-7 text-slate-600">
                            Modern állatorvosi szolgáltatások kis- és nagyállatok számára.
                            Válassza ki az Ön számára megfelelő rendelőt vagy szakterületet.
                        </p>

                        {/* SOCIAL */}
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition hover:border-blue-300 hover:bg-blue-100"
                            >
                                <BadgeInfo className="h-5 w-5 text-blue-600" />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition hover:border-blue-300 hover:bg-blue-100"
                            >
                                <BadgeInfo className="h-5 w-5 text-blue-600" />
                            </a>

                            <Link
                                href="/kapcsolat"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 transition hover:border-blue-300 hover:bg-blue-100"
                            >
                                <Mail className="h-5 w-5 text-blue-600" />
                            </Link>
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="space-y-6 border-l border-blue-100 pl-6">
                        <div>
                            <div className="flex items-center gap-3">
                                <Stethoscope className="h-5 w-5 text-blue-600" />

                                <h4 className="font-semibold text-slate-900">
                                    Kastélydomb Állatorvosi Rendelő
                                </h4>
                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Általános állatorvosi ellátás és kezelések.
                            </p>

                            <div className="mt-4 space-y-2 text-sm text-slate-700">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-blue-600" />
                                    +36 30 123 4567
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-blue-600" />
                                    Budapest, Kastélydomb utca 12.
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-blue-100 pt-6">
                            <div className="flex items-center gap-3">
                                <PawPrint className="h-5 w-5 text-blue-600" />

                                <h4 className="font-semibold text-slate-900">
                                    Nagy- és Kisállat Parazitológia
                                </h4>
                            </div>

                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Parazitológiai labor és diagnosztikai vizsgálatok.
                            </p>

                            <div className="mt-4 space-y-2 text-sm text-slate-700">
                                <div className="flex items-center gap-2">
                                    <Phone className="h-4 w-4 text-blue-600" />
                                    +36 30 987 6543
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-blue-600" />
                                    Budapest, Petőfi utca 8.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="border-l border-blue-100 pl-6">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                            Információk
                        </h4>

                        <div className="mt-5 space-y-3 text-sm text-slate-600">
                            <p>
                                A megfelelő rendelő kiválasztása után a rendszer a kapcsolódó
                                felületre irányítja Önt.
                            </p>

                            <p>
                                A választás később bármikor módosítható.
                            </p>
                        </div>

                        <div className="mt-8 border-t border-blue-100 pt-6 text-sm text-slate-500">
                            © 2026 Állatorvosi Rendszer
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}