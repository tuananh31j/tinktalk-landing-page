"use client";

import { Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

export function AboutAugmentSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Title className="text-4xl md:text-5xl font-bold mb-8">
            Chúng tôi "<span className="text-[#cc2038]">Tăng cường</span>",
            <br />
            không "<span className="text-gray-400">Thay thế</span>".
          </Title>

          <Text size="lg" className="text-gray-600 leading-relaxed mb-12">
            Nền tảng AI của chúng tôi không ở đây để thay thế các huấn luyện
            viên hay các chương trình đào tạo con người xuất sắc của bạn. Thay
            vào đó, chúng tôi tăng cường và mở rộng quy mô những gì đã hiệu quả.
            Giống như các phần mềm tài chính không thay thế các chuyên gia kế
            toán, Tinktalk là một công cụ đòn bẩy giúp các Trưởng phòng đào tạo
            L&D và Quản lí tại các Tập đoàn sử dụng chúng tôi như một công cụ
            củng cố để đảm bảo đội ngũ của họ luôn ở phong độ.
          </Text>

          {/* Visual Formula */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <Text className="text-4xl mb-2">👨‍🏫</Text>
              <Text className="font-semibold">
                Huấn luyện viên
                <br />
                Con người
              </Text>
            </div>

            <Text className="text-4xl font-bold text-gray-400">+</Text>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border-2 border-red-200">
              <Text className="text-4xl mb-2">🤖</Text>
              <Text className="font-semibold">
                Nền tảng
                <br />
                Tinktalk AI
              </Text>
            </div>

            <Text className="text-4xl font-bold text-[#cc2038]">=</Text>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <Text className="text-4xl mb-2">🚀</Text>
              <Text className="font-semibold">
                Đội ngũ
                <br />
                Hiệu suất cao
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
