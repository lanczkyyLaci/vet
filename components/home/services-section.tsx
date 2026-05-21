import { Section } from "@/components/layouts/section/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <Section id="Szolgáltatásaink">
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
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-blue-100 bg-white shadow-md"
              >
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100">
                    <Icon className="h-7 w-7 text-blue-600" />
                  </div>

                  <CardTitle>{service.title}</CardTitle>

                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
