import { Metadata } from "next";
import {
  UseCasesCTA,
  UseCasesGrid,
  UseCasesHero,
} from "~/components/use-cases";

export const metadata: Metadata = {
  title: "Trường hợp sử dụng - Tinktalk",
  description:
    "Khám phá cách Nền tảng Huấn luyện AI của Tinktalk giúp các Tập đoàn chuẩn hoá và mở rộng quy mô năng lực đội ngũ trong mọi tình huống quan trọng.",
};

export default function UseCasesPage() {
  return (
    <>
      <UseCasesHero />
      <UseCasesGrid />
      <UseCasesCTA />
    </>
  );
}
