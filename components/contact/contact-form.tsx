"use client"

import { useState } from "react"
import { Mail, ExternalLink, Copy, Check } from "lucide-react"
import { BackLink } from "@/components/back-link/back-link"

const EMAIL_ADDRESS = "info@allatorvos.hu"

export const ContactForm = () => {
    const [copied, setCopied] = useState(false)

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL_ADDRESS)}`

    const mailtoUrl = `mailto:${EMAIL_ADDRESS}`

    const handleCopyEmail = async () => {
        await navigator.clipboard.writeText(EMAIL_ADDRESS)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="mx-auto max-w-2xl">
            {/* Back */}
            <BackLink href="/" label="Vissza a főoldalra" />

            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
                {/* Header */}
                <div className="mb-8 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                        <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Kapcsolatfelvétel</h1>
                        <p className="text-sm text-slate-600">Küldjön nekünk e-mailt</p>
                    </div>
                </div>

                {/* Email cím */}
                <div className="mb-8">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                        E-mail cím
                    </label>
                    <div className="flex items-center gap-2">
                        <div className="flex-1 rounded-xl border border-blue-100 bg-blue-50/50 px-4 py-3 text-sm font-medium text-slate-700">
                            {EMAIL_ADDRESS}
                        </div>
                        <button
                            onClick={handleCopyEmail}
                            className="flex h-11 items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 transition hover:border-blue-300 hover:bg-blue-100"
                            title="E-mail cím másolása"
                        >
                            {copied ? (
                                <>
                                    <Check className="h-4 w-4 text-green-600" />
                                    <span className="text-sm text-green-600">Másolva!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="h-4 w-4 text-blue-600" />
                                    <span className="text-sm text-blue-600">Másolás</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Actions */}
                <div className="border-t border-blue-100 pt-6">
                    <div className="mb-5">
                        <h3 className="text-md font-semibold text-slate-900">
                            Írjon nekünk
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Válassza ki a kívánt levelezőt — automatikusan megnyílik
                            a címzett e-mail címével kitöltve.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">

                        {/* Gmail */}
                        <a
                            href={gmailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 rounded-2xl border border-blue-200 bg-blue-600 p-4 text-white transition-transform duration-150 hover:bg-blue-700"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-medium">
                                        Megnyitás Gmail-ben
                                    </p>

                                    <p className="mt-1 text-sm text-blue-100">
                                        Új levél írása Gmail felületen.
                                    </p>
                                </div>

                                <ExternalLink className="h-5 w-5" />
                            </div>
                        </a>

                        {/* Mail App */}
                        <a
                            href={mailtoUrl}
                            className="flex-1 rounded-2xl border border-blue-200 bg-white p-4 transition-transform duration-150 hover:border-blue-300 hover:bg-blue-50"
                        >
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-medium text-slate-900">
                                        Megnyitás levelezőben
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Megnyitja az alapértelmezett levelező alkalmazást.
                                    </p>
                                </div>

                                <Mail className="h-5 w-5 text-blue-600" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 p-4">
                <p className="text-sm font-medium text-red-700">
                    Sürgős esetben kérjük telefonon vegye fel velünk a kapcsolatot.
                </p>
            </div>
        </div>
    )
}
