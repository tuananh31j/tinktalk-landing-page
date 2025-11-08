"use client";

import { Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

export function ResourcesHero() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Title className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tài nguyên & <span className="text-[#cc2038]">Cộng đồng</span>
          </Title>

          <Text size="xl" className="text-gray-600 leading-relaxed">
            Khám phá các tài nguyên, kết nối với cộng đồng, và tìm hiểu thêm về
            Tinktalk
          </Text>
        </motion.div>
      </Container>
    </section>
  );
}
