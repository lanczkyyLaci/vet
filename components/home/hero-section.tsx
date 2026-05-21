import { Section } from "@/components/layouts/section/section";
import { paths } from "@/config/paths";
import Image from "next/image";
import hero from "@/public/vet-hero-bg-v3.webp";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <Section id="hero" className="relative min-h-[70vh] overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={hero}
            alt="Allatorvosi Rendelo hatter"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-center px-4 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-blue-300" />
              Modern Állatorvosi ellátás
            </div>

            {/* Title */}
            <h1 className="mt-6 text-4xl leading-tight font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Kastélydomb Állatorvosi Rendelő és
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Nagy- és Kisállat praxis
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
              Professzionális állatorvosi ellátás, diagnosztika és
              parazitológiai vizsgálatok modern környezetben, kis- és
              nagyállatok számára.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#valasszon-rendelot"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40"
              >
                Valasszon rendelot
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href={paths.app.contact.getHref()}
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20"
              >
                Kapcsolat
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
