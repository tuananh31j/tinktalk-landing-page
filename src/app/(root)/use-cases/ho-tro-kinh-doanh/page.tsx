import { Metadata } from "next";
import {
  UseCaseDetailHero,
  HowItWorksSection,
  SocialProofSection,
  OtherSolutionsSection,
  ContactFormSection,
} from "~/components/use-cases";

export const metadata: Metadata = {
  title: "Hỗ trợ kinh doanh - Tinktalk",
  description:
    "Giúp đội ngũ kinh doanh làm chủ các kịch bản chào hàng, vượt qua các lời từ chối, và tối ưu hoá các cuộc đàm phán giá trị cao.",
};

export default function SalesUseCasePage() {
  const steps = [
    {
      title: "Tuỳ chỉnh bối cảnh",
      description:
        "Quản trị viên tuỳ chỉnh các kịch bản luyện tập–từ nhân vật AI đến bối cảnh hội thoại (ví dụ: 'Xử lí từ chối', 'Đàm phán giá').",
    },
    {
      title: "Thực hành hội thoại",
      description:
        "Nhân viên sales luyện tập trong môi trường riêng tư và an toàn. AI nhập vai khách hàng và phản hồi dựa trên bối cảnh được thiết lập.",
    },
    {
      title: "Nhận phản hồi chuyên sâu",
      description:
        "AI thấu hiểu bối cảnh tiếng Việt, cung cấp các phân tích khách quan về Sự rõ ràng, Sự tự tin, và tác động của thông điệp, giúp đội ngũ tinh chỉnh nhanh chóng.",
    },
  ];

  return (
    <>
      <UseCaseDetailHero
        title="Nâng cao hiệu suất đội ngũ bán hàng"
        subtitle="Nhận phản hồi AI tức thì và khách quan từ Nền tảng Huấn luyện Giao tiếp của Tinktalk."
      />
      <HowItWorksSection steps={steps} />
      <SocialProofSection />
      <OtherSolutionsSection currentPath="/use-cases/ho-tro-kinh-doanh" />
      <ContactFormSection
        title="Mang Nền tảng Huấn luyện AI của Tinktalk về đội ngũ của Bạn"
        description="Điền form để được tư vấn giải pháp phù hợp nhất cho doanh nghiệp của bạn."
      />
    </>
  );
}
