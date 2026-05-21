import { Scale, AlertTriangle, Dog } from "lucide-react";
import { rules } from "./_utils/rules";
import { colorClasses } from "../services-section/_utils/color-classes";

export function DogRulesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-amber-100/40 to-orange-100/30 blur-3xl" />
        <div className="absolute bottom-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/30 to-indigo-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 px-4 py-2 text-sm font-medium text-amber-700">
            <Scale className="h-4 w-4" />
            Jogszabaly
          </div>
          <h2 className="bg-gradient-to-r from-slate-900 via-amber-900 to-orange-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Kutyatartas Szabalyai
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            A kutyak tartasanak szabalyait a 41/2010. (II. 26.) Korm. rendelet
            szabalyozza, ami vilagosan megszabja a tulajdonos feladatait.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rules.map((rule, index) => {
            const colors = colorClasses[rule.color];
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
              <h4 className="font-semibold text-amber-900">Fontos tudnivalo</h4>
              <p className="mt-1 text-sm leading-relaxed text-amber-800">
                Szajkosarat hasznalni kizarolag az egyed jellemzoen agressziv
                magatartasanak ismerete eseten kell, kiveve ha kulon jogszabaly
                a szajkosar hasznalatat eloirja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
