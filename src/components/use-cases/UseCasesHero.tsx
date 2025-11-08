"use client";

import { Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

export function UseCasesHero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <Title className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Một Nền tảng.
            <br />
            Mọi kỹ năng <span className="text-[#cc2038]">Giao tiếp</span> then
            chốt.
          </Title>

          <Text size="xl" className="text-gray-600 leading-relaxed">
            Khám phá cách Nền tảng Huấn luyện AI của Tinktalk giúp các Tập đoàn
            chuẩn hoá và mở rộng quy mô năng lực đội ngũ trong mọi tình huống
            quan trọng.
          </Text>

          {/* Visual: 4 use cases grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12 grid grid-cols-2 gap-4 max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 flex items-center justify-center h-32">
              <Text className="text-blue-700 font-semibold text-lg">Sales</Text>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 flex items-center justify-center h-32">
              <Text className="text-green-700 font-semibold text-lg">L&D</Text>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 flex items-center justify-center h-32">
              <Text className="text-purple-700 font-semibold text-lg">HR</Text>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200 flex items-center justify-center h-32">
              <Text className="text-orange-700 font-semibold text-lg">
                Leadership
              </Text>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
