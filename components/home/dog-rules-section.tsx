import { dogRules, dogRulesColorClasses } from "@/data/dog-rules";
import { AlertTriangle, Dog, Scale, Sparkles } from "lucide-react";
import { Section } from "@/components/layouts/section/section";
import { BadgeLabel } from "@/components/ui/badge-label";
import { Title } from "@/components/ui/title";
import { Description } from "@/components/ui/description";

export function DogRulesSection() {
  return (
    <Section id="dog-rules-section" className="relative">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <BadgeLabel
            icon={Scale}
            label="Jogszabaly"
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-4 py-2 text-sm font-medium text-amber-700"
          />

          <Title
            as="h2"
            size="xl"
            title="Kutyatartás szabályai"
            variant="blue"
          />
          <Description className="mt-2" size="lg">
            Fontos tudnivalók a felelős és biztonságos kutyatartásról.
          </Description>
        </div>

        {/* Rules Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dogRules.map((rule, index) => {
            const colors = dogRulesColorClasses[rule.color];
            const Icon = rule.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 shadow-slate-200/50 ring-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-slate-300/50"
              >
                {/* Decorative corner gradient */}
                <div
                  className={`absolute -top-8 -right-8 h-24 w-24 rounded-full ${colors.bg} opacity-50 blur-2xl transition-all duration-300 group-hover:opacity-80`}
                />

                {/* Icon */}
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${colors.iconBg} shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className={`mb-3 text-lg font-bold ${colors.text}`}>
                  {rule.title}
                </h3>

                {/* Content */}
                {rule.content && (
                  <p className="text-sm leading-relaxed text-slate-600">
                    {rule.content}
                  </p>
                )}

                {/* Items list */}
                {rule.items && (
                  <ul className="space-y-2.5">
                    {rule.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span
                          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${colors.bg} ring-1 ${colors.ring}`}
                        >
                          <Dog className={`h-3 w-3 ${colors.text}`} />
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="mt-10 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 p-6 ring-1 ring-amber-100">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-500">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-amber-900">Fontos tudnivaló</h4>
              <p className="mt-1 text-sm leading-relaxed text-amber-800">
                Szájkosarat használni kizárólag az egyed jellemzően agresszív
                magatartásának ismerete esetén kell, kivéve ha külön jogszabály
                a szájkosár használatát előírja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
