import { BackLink } from "@/components/back-link/back-link";
import { Section } from "@/components/layouts/section/section";
import { paths } from "@/config/paths";

export function HeroSection() {
  return (
    <Section id="hero">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm text-blue-700 shadow-sm">
            Modern Állatorvosi ellátás
          </div>

          <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-900 md:text-5xl">
            Kastélydomb Állatorvosi Rendelő és
            <span className="block text-blue-600">
              Nagy- és Kisállat praxis
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
  );
}
