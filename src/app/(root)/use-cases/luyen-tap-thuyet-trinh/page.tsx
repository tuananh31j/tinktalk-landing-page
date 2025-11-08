import { Metadata } from "next";
import {
  UseCaseDetailHero,
  HowItWorksSection,
  SocialProofSection,
  OtherSolutionsSection,
  ContactFormSection,
} from "~/components/use-cases";

export const metadata: Metadata = {
  title: "Giao tiếp lãnh đạo - Tinktalk",
  description:
    "Giúp đội ngũ lãnh đạo tinh chỉnh các bài phát biểu, thuyết trình trước hội đồng, hoặc các buổi giao tiếp toàn công ty.",
};

export default function LeadershipUseCasePage() {
  const steps = [
    {
      title: "Tuỳ chỉnh bối cảnh",
      description:
        "Quản trị viên tuỳ chỉnh các kịch bản luyện tập–từ nhân vật AI đến bối cảnh hội thoại (ví dụ: 'Thuyết trình trước hội đồng', 'Town hall meeting').",
    },
    {
      title: "Thực hành hội thoại",
      description:
        "Lãnh đạo luyện tập trong một môi trường riêng tư và an toàn. AI sẽ nhập vai khán giả và phản hồi dựa trên bối cảnh được thiết lập.",
    },
    {
      title: "Nhận phản hồi chuyên sâu",
      description:
        "AI thấu hiểu bối cảnh tiếng Việt, cung cấp các phân tích khách quan về Sự rõ ràng, Sự tự tin, ngôn ngữ cơ thể và tác động của thông điệp.",
    },
  ];

  return (
    <>
      <UseCaseDetailHero
        title="Làm chủ các Bài thuyết trình Cấp cao"
        subtitle="Nhận phản hồi AI tức thì và khách quan từ Nền tảng Huấn luyện Giao tiếp của Tinktalk."
      />
      <HowItWorksSection steps={steps} />
      <SocialProofSection />
      <OtherSolutionsSection currentPath="/use-cases/luyen-tap-thuyet-trinh" />
      <ContactFormSection
        title="Mang Nền tảng Huấn luyện AI của Tinktalk về đội ngũ của Bạn"
        description="Điền form để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn."
      />
    </>
  );
}
