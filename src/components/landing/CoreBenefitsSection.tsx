"use client";

import { Container, Title, Text, SimpleGrid, Card } from "@mantine/core";
import { motion } from "framer-motion";
import { IconTargetArrow, IconBrain, IconChartBar } from "@tabler/icons-react";

const benefits = [
  {
    icon: IconTargetArrow,
    title: "Môi trường luyện tập chuyên sâu",
    description:
      "Cung cấp các kịch bản nhập vai thực tế trong một môi trường an toàn, bảo mật. Cho phép đội ngũ của bạn luyện tập không giới hạn mà không sợ rủi ro phán xét.",
  },
  {
    icon: IconBrain,
    title: "Phản hồi AI chuyên sâu, thấu hiểu bối cảnh",
    description:
      "Nền tảng AI duy nhất được huấn luyện chuyên sâu để thấu hiểu sâu sắc ngữ cảnh và sắc thái phức tạp của Tiếng Việt. AI của chúng tôi nhận diện điểm cải thiện mà công cụ thông thường bỏ lỡ.",
  },
  {
    icon: IconChartBar,
    title: "Đo lường & Tối ưu hoá hiệu suất",
    description:
      "Cung cấp các Bảng Báo cáo chi tiết và các chỉ số đo lường khách quan. Giúp Quản lí và Cá nhân theo dõi sự tiến bộ và xác định các 'lỗ hổng' kỹ năng.",
  },
];

export function CoreBenefitsSection() {
  return (
    <section className="py-20">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Title order={2} className="text-4xl md:text-5xl font-bold mb-4">
            Không chỉ luyện tập. Đây là Huấn luyện Thông minh.
          </Title>
        </motion.div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                className="h-full text-center border border-gray-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-primary-1 p-4 rounded-full">
                    <benefit.icon
                      size={48}
                      className="text-primary-6"
                      stroke={1.5}
                    />
                  </div>
                </div>
                <Title order={3} className="text-xl font-semibold mb-4">
                  {benefit.title}
                </Title>
                <Text className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
