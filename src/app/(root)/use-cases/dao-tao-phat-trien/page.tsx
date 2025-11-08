import { Metadata } from "next";
import {
  UseCaseDetailHero,
  HowItWorksSection,
  SocialProofSection,
  OtherSolutionsSection,
  ContactFormSection,
} from "~/components/use-cases";

export const metadata: Metadata = {
  title: "Đào tạo & Phát triển - Tinktalk",
  description:
    "Chuẩn hoá quy trình hội nhập nhân viên mới, đo lường hiệu quả đào tạo kỹ năng mềm, và lưu trữ thư viện các phương pháp tốt nhất của công ty.",
};

export default function LearningUseCasePage() {
  const steps = [
    {
      title: "Tuỳ chỉnh bối cảnh",
      description:
        "Quản trị viên tuỳ chỉnh các kịch bản đào tạo–từ nhân vật AI đến bối cảnh hội thoại (ví dụ: 'Onboarding nhân viên mới', 'Đào tạo kỹ năng mềm').",
    },
    {
      title: "Thực hành hội thoại",
      description:
        "Nhân viên luyện tập trong một môi trường riêng tư và an toàn. AI sẽ nhập vai và phản hồi dựa trên bối cảnh được thiết lập.",
    },
    {
      title: "Nhận phản hồi chuyên sâu",
      description:
        "AI thấu hiểu bối cảnh tiếng Việt, cung cấp các phân tích khách quan về Sự rõ ràng, Sự tự tin, và tác động của thông điệp, giúp đội ngũ L&D theo dõi tiến độ.",
    },
  ];

  return (
    <>
      <UseCaseDetailHero
        title="Mở rộng quy mô & Đo lường đào tạo"
        subtitle="Nhận phản hồi AI tức thì và khách quan từ Nền tảng Huấn luyện Giao tiếp của Tinktalk."
      />
      <HowItWorksSection steps={steps} />
      <SocialProofSection />
      <OtherSolutionsSection currentPath="/use-cases/dao-tao-phat-trien" />
      <ContactFormSection
        title="Mang Nền tảng Huấn luyện AI của Tinktalk về đội ngũ của Bạn"
        description="Điền form để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn."
      />
    </>
  );
}
