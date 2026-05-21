import { PageWrapper } from "@/components/layouts/page-wrapper/page-wrapper";
import { HeroSection } from "@/components/home/hero-section";
import { ClinicSelectorSection } from "@/components/home/clinic-selector-section";
import { ServicesSection } from "@/components/home/services-section";

export default function Page() {
  return (
    <>
      <HeroSection />
      <PageWrapper>
        <ClinicSelectorSection />
        <ServicesSection />
      </PageWrapper>
    </>
  );
}
