import { Metadata } from "next";
import { PricingSection, PricingFAQ, PricingCTA } from "~/components/pricing";

export const metadata: Metadata = {
  title: "Bảng giá - Tinktalk",
  description:
    "Các gói giải pháp được thiết kế để mở khoá tiềm năng giao tiếp của đội ngũ và chứng minh giá trị đầu tư cho doanh nghiệp của bạn.",
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <PricingFAQ />
      <PricingCTA />
    </>
  );
}
