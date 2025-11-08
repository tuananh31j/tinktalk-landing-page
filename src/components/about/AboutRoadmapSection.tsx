"use client";

import { Container, Title, Text, Timeline } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconRocket,
  IconTarget,
  IconBrain,
  IconWorld,
} from "@tabler/icons-react";

export function AboutRoadmapSection() {
  const roadmap = [
    {
      icon: IconRocket,
      title: "Luyện tập Tích hợp",
      description:
        "Đội ngũ Sales sẽ luyện tập ngay bên trong các công cụ CRM của họ (mà không cần rời khỏi) tại các thời điểm then chốt của giao dịch.",
    },
    {
      icon: IconTarget,
      title: "Kịch bản Siêu Cá nhân hoá",
      description:
        "AI thiết kế các kịch bản luyện tập dựa trên điểm mạnh và điểm yếu cụ thể của từng cá nhân.",
    },
    {
      icon: IconBrain,
      title: "Phân tích Thông minh",
      description:
        "Tinktalk nhận diện các khuôn mẫu trong toàn đội nhóm, đề xuất các lĩnh vực cần tập trung, và thậm chí dự đoán các nhu cầu huấn luyện bổ sung.",
    },
    {
      icon: IconWorld,
      title: "Tiếp cận tất cả",
      description:
        "Từ các Tập đoàn (Fortune 500) đến các cá nhân chuẩn bị cho buổi phỏng vấn đầu tiên, Huấn luyện AI sẽ nằm trong tầm tay tất cả mọi người.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title className="text-4xl md:text-5xl font-bold mb-6">
            Một cái nhìn thoáng qua về
            <br />
            <span className="text-[#cc2038]">Tương lai</span> của Huấn luyện AI
          </Title>

          <Text size="lg" className="text-gray-600 max-w-3xl mx-auto">
            Những gì bạn thấy hôm nay mới chỉ là khởi đầu. Chúng tôi đang hướng
            tới một tương lai nơi:
          </Text>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <Timeline active={3} bulletSize={40} lineWidth={2} color="red">
            {roadmap.map((item, index) => (
              <Timeline.Item
                key={index}
                bullet={<item.icon size={20} />}
                title={<Text className="text-xl font-bold">{item.title}</Text>}
              >
                <Text className="text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        </motion.div>
      </Container>
    </section>
  );
}
