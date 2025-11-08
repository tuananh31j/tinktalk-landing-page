import { Metadata } from "next";
import {
  ResourcesHero,
  ResourcesGrid,
  PartnersSection,
} from "~/components/resources";

export const metadata: Metadata = {
  title: "Tài nguyên - Tinktalk",
  description:
    "Khám phá các tài nguyên, kết nối với cộng đồng, và tìm hiểu thêm về Tinktalk",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHero />
      <ResourcesGrid />
      <PartnersSection />
    </>
  );
}
