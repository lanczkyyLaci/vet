import { PawPrint, Check } from "lucide-react";
import { services } from "./_utils/services";
import { colorClasses } from "./_utils/color-classes";

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 py-20">
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-200/40 to-indigo-200/40 blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-200/30 to-blue-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-2 text-sm font-medium text-blue-700">
            <PawPrint className="h-4 w-4" />
            Kisallatok allatorvosi ellatasa
          </div>
          <h2 className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
            Szolgaltatasaink
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Teljes koru allatorvosi ellatas kis- es nagyallatok szamara.
            Vedooltasok, kezelesek, mutetek es megelozes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const colors = colorClasses[service.color];
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
    </section>
  );
}
