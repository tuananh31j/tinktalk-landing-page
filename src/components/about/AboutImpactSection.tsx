"use client";

import { Container, Title, Text, Card } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconChartLine,
  IconSchool,
  IconUsers,
  IconPresentation,
} from "@tabler/icons-react";

export function AboutImpactSection() {
  const impacts = [
    {
      icon: IconChartLine,
      title: "Hỗ trợ kinh doanh",
      description:
        "Các tập đoàn đang sử dụng Tinktalk để chuẩn hoá đội ngũ bán hàng và tăng tốc thời gian hội nhập.",
    },
    {
      icon: IconSchool,
      title: "Huấn luyện quản lý",
      description:
        "Các Trưởng phòng Đào tạo (L&D) đang nhúng Tinktalk vào các cổng thông tin nội bộ để tăng cường các buổi đánh giá và huấn luyện 1-1.",
    },
    {
      icon: IconUsers,
      title: "Tuyển dụng & Nhân sự",
      description:
        "Các Trưởng phòng Nhân sự và các ứng viên đang sử dụng Tinktalk để chuẩn bị các cuộc phỏng vấn áp lực cao.",
    },
    {
      icon: IconPresentation,
      title: "Giao tiếp Cấp cao",
      description:
        "Các tổ chức (như các Tập đoàn lớn) đã tuỳ chỉnh các kịch bản AI để xây dựng phong thái cho đội ngũ lãnh đạo.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title className="text-4xl md:text-5xl font-bold mb-6">
            Nơi chúng tôi đang tạo ra
            <br />
            <span className="text-[#cc2038]">tác động</span> lớn nhất.
          </Title>

          <Text size="lg" className="text-gray-600 max-w-3xl mx-auto">
            Các tổ chức hàng đầu đang sử dụng Nền tảng huấn luyện AI theo những
            cách mà chúng tôi không lường trước được:
          </Text>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {impacts.map((impact, index) => (
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
                className="h-full border border-gray-200 hover:border-[#cc2038] transition-all"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#cc2038] to-[#a81a2e] mb-4">
                  <impact.icon size={28} className="text-white" />
                </div>

                <Title order={3} className="text-xl font-bold mb-3">
                  {impact.title}
                </Title>

                <Text className="text-gray-600 leading-relaxed">
                  {impact.description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
