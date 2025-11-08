"use client";

import { Container, Card, Title, Text, Button } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconChartLine,
  IconSchool,
  IconUsers,
  IconPresentation,
} from "@tabler/icons-react";

export function UseCasesGrid() {
  const useCases = [
    {
      icon: IconChartLine,
      title: "Hỗ trợ kinh doanh",
      subtitle: "Nâng cao hiệu suất đội ngũ bán hàng",
      description:
        "Giúp đội ngũ kinh doanh làm chủ các kịch bản chào hàng, vượt qua các lời từ chối, và tối ưu hoá các cuộc đàm phán giá trị cao.",
      href: "/use-cases/ho-tro-kinh-doanh",
      color: "blue",
    },
    {
      icon: IconSchool,
      title: "Đào tạo & Phát triển (L&D)",
      subtitle: "Mở rộng quy mô & Đo lường đào tạo",
      description:
        "Chuẩn hoá quy trình hội nhập nhân viên mới, đo lường hiệu quả đào tạo kỹ năng mềm, và lưu trữ thư viện các phương pháp tốt nhất của công ty.",
      href: "/use-cases/dao-tao-phat-trien",
      color: "green",
    },
    {
      icon: IconUsers,
      title: "Tuyển dụng & Nhân sự",
      subtitle: "Chuẩn bị cho các Cuộc Phỏng vấn then chốt",
      description:
        "Trang bị cho các nhà tuyển dụng kỹ năng phỏng vấn nhất quán, hoặc giúp các ứng viên nội bộ luyện tập cho các kỳ thăng chức quan trọng.",
      href: "/use-cases/chuan-bi-phong-van",
      color: "orange",
    },
    {
      icon: IconPresentation,
      title: "Giao tiếp lãnh đạo",
      subtitle: "Làm chủ các Bài thuyết trình Cấp cao",
      description:
        "Giúp đội ngũ lãnh đạo tinh chỉnh các bài phát biểu, thuyết trình trước hội đồng, hoặc các buổi giao tiếp toàn công ty.",
      href: "/use-cases/luyen-tap-thuyet-trinh",
      color: "red",
    },
  ];

  const colorMap = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    red: "from-[#cc2038] to-[#a81a2e]",
  };

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container size="xl">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                shadow="md"
                padding="xl"
                radius="lg"
                className="h-full border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                component={Link}
                href={useCase.href}
              >
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${colorMap[useCase.color as keyof typeof colorMap]} mb-4`}
                >
                  <useCase.icon size={32} className="text-white" />
                </div>

                <Title order={3} className="text-xl font-bold mb-2">
                  {useCase.title}
                </Title>

                <Text size="sm" className="text-gray-600 font-medium mb-3">
                  {useCase.subtitle}
                </Text>

                <Text className="text-gray-600 leading-relaxed mb-6">
                  {useCase.description}
                </Text>

                <Button
                  variant="subtle"
                  color="red"
                  className="group-hover:translate-x-2 transition-transform"
                >
                  Tìm hiểu thêm →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
