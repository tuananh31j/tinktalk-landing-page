import { Metadata } from "next";
import {
  AboutHeroSection,
  AboutAugmentSection,
  AboutImpactSection,
  AboutRoadmapSection,
  AboutTeamSection,
} from "~/components/about";

export const metadata: Metadata = {
  title: "Về chúng tôi - Tinktalk",
  description:
    "Tương lai của Huấn luyện: Phòng Gym AI cho kỹ năng con người. Sứ mệnh của Tinktalk là dân chủ hoá việc huấn luyện kỹ năng giao tiếp chuyên sâu.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutAugmentSection />
      <AboutImpactSection />
      <AboutRoadmapSection />
      <AboutTeamSection />
    </>
  );
}
