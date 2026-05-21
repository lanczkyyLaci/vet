import { Sparkles } from "lucide-react";
import { Section } from "@/components/layouts/section/section";
import { Title } from "@/components/ui/title";
import { Description } from "@/components/ui/description";
import { BadgeLabel } from "@/components/ui/badge-label";
import { ClinicCard } from "@/components/clinic-card/clinic-card";
import { clinics } from "@/data/clinics";

export function ClinicSelectorSection() {
  return (
    <Section id="valasszon-rendelot" className="scroll-mt-1">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <BadgeLabel
            icon={Sparkles}
            label="Professzionalis allatorvosi ellatas"
            className="mb-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700"
          />

          <Title
            as="h2"
            size="xl"
            title="Válasszon rendelőt"
            variant="blue"
          />
          <Description className="mt-2" size="lg">
            A kiválasztott felület később bármikor módosítható.
          </Description>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {clinics.map((clinic) => (
            <ClinicCard key={clinic.href} clinic={clinic} />
          ))}
        </div>
      </div>
    </Section>
  );
}
