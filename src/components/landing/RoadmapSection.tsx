"use client";

import { Container, Title, Text, Card, Badge } from "@mantine/core";
import { motion } from "framer-motion";
import { IconRocket, IconPlug, IconTrendingUp } from "@tabler/icons-react";

const roadmapStages = [
  {
    icon: IconRocket,
    stage: "Giai đoạn 1",
    status: "Có sẵn hôm nay",
    title: "Nền tảng phân tích & huấn luyện AI",
    description:
      "Cung cấp Bộ tiêu chí Tuỳ chỉnh. Báo cáo Hiệu suất. Môi trường luyện tập an toàn",
    statusColor: "blue",
  },
  {
    icon: IconPlug,
    stage: "Giai đoạn 2",
    status: "Sắp ra mắt",
    title: "Nền tảng Tích hợp",
    description:
      "Tầm nhìn của chúng tôi là một nền tảng kết nối, sẵn sàng tích hợp vào các hệ sinh thái Quản lí Học tập (LMS) và Quản lí Nhân sự (HRIS) của bạn",
    statusColor: "blue",
  },
  {
    icon: IconTrendingUp,
    stage: "Giai đoạn 3",
    status: "Tầm nhìn Tương lai",
    title: "Nền tảng tối ưu hiệu suất",
    description:
      "Hoàn thiện vòng lặp bằng cách kết nối dữ liệu luyện tập với dữ liệu hiệu suất thực tế để chứng minh và tối ưu hoá ROI.",
    statusColor: "blue",
  },
];

export function RoadmapSection() {
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
            Một Nền tảng. Một Tầm nhìn.
          </Title>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-3 via-primary-5 to-primary-7 transform -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {roadmapStages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card
                  shadow="lg"
                  padding="xl"
                  radius="md"
                  className="h-full border-2 border-primary-3 bg-white"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary-1 p-4 rounded-full">
                      <stage.icon
                        size={48}
                        className="text-primary-6"
                        stroke={1.5}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <Text
                      size="sm"
                      className="text-gray-500 mb-2"
                    >
                      {stage.stage}
                    </Text>
                    <Badge
                      color={stage.statusColor}
                      size="lg"
                      variant="light"
                      className="mb-3"
                    >
                      {stage.status}
                    </Badge>
                  </div>

                  <Title
                    order={3}
                    className="text-xl font-semibold mb-3 text-center"
                  >
                    {stage.title}
                  </Title>

                  <Text className="text-gray-600 leading-relaxed text-center">
                    {stage.description}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
