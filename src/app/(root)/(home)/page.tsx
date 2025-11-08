import { HeroSection } from "~/components/landing/HeroSection";
import { UserSegmentsSection } from "~/components/landing/UserSegmentsSection";
import { CoreBenefitsSection } from "~/components/landing/CoreBenefitsSection";
import { SecuritySection } from "~/components/landing/SecuritySection";
import { RoadmapSection } from "~/components/landing/RoadmapSection";
import { CTASection } from "~/components/landing/CTASection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <UserSegmentsSection />
      <CoreBenefitsSection />
      <SecuritySection />
      <RoadmapSection />
      <CTASection />
    </>
  );
};

export default HomePage;
