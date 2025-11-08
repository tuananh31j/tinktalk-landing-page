import { Metadata } from "next";
import {
  UseCaseDetailHero,
  HowItWorksSection,
  SocialProofSection,
  OtherSolutionsSection,
  ContactFormSection,
} from "~/components/use-cases";

export const metadata: Metadata = {
  title: "Tuyển dụng & Nhân sự - Tinktalk",
  description:
    "Trang bị cho các nhà tuyển dụng kỹ năng phỏng vấn nhất quán, hoặc giúp các ứng viên nội bộ luyện tập cho các kỳ thăng chức quan trọng.",
};

export default function HRUseCasePage() {
  const steps = [
    {
      title: "Tuỳ chỉnh bối cảnh",
      description:
        "Quản trị viên tuỳ chỉnh các kịch bản luyện tập–từ nhân vật AI đến bối cảnh hội thoại (ví dụ: 'Phỏng vấn cấp Quản lí', 'Đánh giá hiệu suất').",
    },
    {
      title: "Thực hành hội thoại",
      description:
        "Người dùng luyện tập trong một môi trường riêng tư và an toàn. AI sẽ nhập vai ứng viên hoặc nhà quản lí và phản hồi dựa trên bối cảnh.",
    },
    {
      title: "Nhận phản hồi chuyên sâu",
      description:
        "AI thấu hiểu bối cảnh tiếng Việt, cung cấp các phân tích khách quan về Sự rõ ràng, Sự tự tin, và cách đặt câu hỏi, giúp người dùng tinh chỉnh nhanh chóng.",
    },
  ];

  return (
    <>
      <UseCaseDetailHero
        title="Chuẩn bị cho các Cuộc Phỏng vấn then chốt"
        subtitle="Nhận phản hồi AI tức thì và khách quan từ Nền tảng Huấn luyện Giao tiếp của Tinktalk."
      />
      <HowItWorksSection steps={steps} />
      <SocialProofSection />
      <OtherSolutionsSection currentPath="/use-cases/chuan-bi-phong-van" />
      <ContactFormSection
        title="Mang Nền tảng Huấn luyện AI của Tinktalk về đội ngũ của Bạn"
        description="Điền form để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn."
      />
    </>
  );
}
