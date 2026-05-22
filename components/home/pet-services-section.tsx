import { Section } from "@/components/layouts/section/section";
import { Check, PawPrint, Sparkles } from "lucide-react";
import { petColorClasses, petServices } from "@/data/pet-services";
import { BadgeLabel } from "@/components/ui/badge-label";
import { Title } from "@/components/ui/title";
import { Description } from "@/components/ui/description";

export const PetServicesSection = () => {
  return (
    <Section id="pet-services-section">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <BadgeLabel
            icon={Sparkles}
            label="Kisállatok állatorvosi ellátása"
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-2 text-sm font-medium text-blue-700"
          />

          <Title as="h2" size="xl" title="Szolgáltatásaink" variant="blue" />
          <Description className="mt-2" size="lg">
            Teljes körű állatorvosi ellátás kis- és nagyállatok számára.
            Védőoltások, kezelések, műtétek és megelőzés.
          </Description>
        </div>
        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {petServices.map((service) => {
            const colors = petColorClasses[service.color];
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Card Header */}
                <div className={`${colors.bg} p-5`}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.iconBg} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900">
                        {service.title}
                      </h3>
                      <p className={`text-sm ${colors.text}`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Details always visible */}
                  <div className="mt-4 border-t border-slate-100 pt-4">
                    <ul className="space-y-2.5">
                      {service.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <span
                            className={`mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.bg} ring-1 ${colors.ring}`}
                          >
                            <Check className={`h-3 w-3 ${colors.text}`} />
                          </span>
                          <span className="leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

// drtorok68@gmail.com
