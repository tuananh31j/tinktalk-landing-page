"use client";

import { Container, Title, Text, Avatar, Card } from "@mantine/core";
import { motion } from "framer-motion";

export function AboutTeamSection() {
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
            Sứ mệnh & Đội ngũ của chúng tôi
          </Title>

          <Text
            size="lg"
            className="text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Sứ mệnh của Tinktalk là dân chủ hoá việc huấn luyện kỹ năng giao
            tiếp chuyên sâu. Chúng tôi tin rằng cơ hội không nên chỉ dành cho
            người có mối quan hệ, mà dành cho{" "}
            <span className="font-semibold text-[#cc2038]">
              người chuẩn bị tốt nhất
            </span>
            .
          </Text>
        </motion.div>

        {/* Founder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <Card shadow="lg" padding="xl" radius="lg" className="text-center">
            <Avatar
              size={120}
              radius={120}
              mx="auto"
              mb="md"
              className="border-4 border-[#cc2038]"
            />
            <Title order={3} className="text-2xl font-bold mb-2">
              Nguyễn Mạnh Quân
            </Title>
            <Text className="text-[#cc2038] font-semibold mb-4">
              Sáng lập & Giám đốc Điều hành
            </Text>
          </Card>
        </motion.div>

        {/* Advisors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Title order={2} className="text-2xl font-bold text-center mb-8">
            Hội đồng Cố vấn & Chuyên gia
          </Title>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3].map((mentor) => (
              <Card
                key={mentor}
                shadow="md"
                padding="lg"
                radius="lg"
                className="text-center hover:shadow-xl transition-shadow"
              >
                <Avatar size={80} radius={80} mx="auto" mb="md" />
                <Text className="font-semibold text-lg mb-1">
                  [Tên Mentor {mentor}]
                </Text>
                <Text size="sm" className="text-gray-600">
                  (Chức danh của Mentor {mentor})
                </Text>
              </Card>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
