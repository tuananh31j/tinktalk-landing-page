"use client";

import {
  Container,
  Title,
  Text,
  Card,
  SimpleGrid,
  Button,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconChartLine,
  IconSchool,
  IconUsers,
  IconSpeakerphone,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const segments = [
  {
    icon: IconChartLine,
    title: "Hỗ trợ kinh doanh (Sales)",
    features: [
      "Tải lên kịch bản và tài liệu nội bộ",
      "Luyện tập xử lí từ chối với AI nhập vai khách hàng khó tính",
      "Đo lường hiệu suất và theo dõi tiến độ của đội nhóm",
    ],
    link: "/",
  },
  {
    icon: IconSchool,
    title: "Đào tạo & Phát triển (L&D)",
    features: [
      "Chuẩn hoá và mở rộng quy mô hội nhập nhân viên mới",
      "Xây dựng thư viện các phương pháp tốt nhất của công ty",
      "Đảm bảo thông điệp nhất quán trên toàn tổ chức",
    ],
    link: "/",
  },
  {
    icon: IconUsers,
    title: "Tuyển dụng & Nhân sự",
    features: [
      "Chuẩn bị cho các buổi phỏng vấn quan trọng (cả vai trò ứng viên và nhà tuyển dụng)",
      "Huấn luyện kỹ năng đánh giá nhân viên hoặc xử lí các tình huống nhân sự nhạy cảm",
      "Nhận phản hồi tức thì về sự tự tin và cách đặt câu hỏi",
    ],
    link: "/",
  },
  {
    icon: IconSpeakerphone,
    title: "Giao tiếp lãnh đạo",
    features: [
      "Luyện tập các bài thuyết trình quan trọng nội bộ hoặc trước khách hàng",
      "Chuẩn bị cho các cuộc họp hội đồng hoặc các buổi giao tiếp toàn công ty",
    ],
    link: "/",
  },
];

export function UserSegmentsSection() {
  const router = useRouter();
  return (
    <section className="py-20 bg-gray-50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Title order={2} className="text-4xl md:text-5xl font-bold mb-4">
            Giải pháp cho Mọi Nhu cầu Giao tiếp
          </Title>
        </motion.div>

        <SimpleGrid cols={{ base: 1, md: 2, lg: 4 }} spacing="lg">
          {segments.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                shadow="md"
                padding="lg"
                radius="md"
                className="h-full hover:shadow-xl transition-shadow cursor-pointer border border-gray-200 flex flex-col"
                onClick={() => router.push(segment.link)}
              >
                <Card.Section className="p-6 border-b border-gray-100 ">
                  <segment.icon
                    size={48}
                    className="text-primary-6 mb-4"
                    stroke={1.5}
                  />
                  <Title order={3} className="text-xl font-semibold mb-3">
                    {segment.title}
                  </Title>
                </Card.Section>

                <Card.Section className="flex-1 px-6">
                  <div className="space-y-3 mb-4">
                    {segment.features.map((feature, idx) => (
                      <p
                        key={idx}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="text-primary-6 mr-2">•</span>
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                </Card.Section>
                <Button
                  variant="light"
                  color="primary"
                  fullWidth
                  onClick={() => router.push(segment.link)}
                >
                  Tìm hiểu thêm
                </Button>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
