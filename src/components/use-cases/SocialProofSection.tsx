"use client";

import { Container, Title, Text, SimpleGrid } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";

export function SocialProofSection() {
  const logos = ["VNU", "VISI", "AWS", "Google Cloud", "TikTok", "Mắt Bão"];

  return (
    <section className="py-20 bg-gray-50">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Được tin dùng bởi các Tập đoàn hàng đầu
          </Title>
        </motion.div>

        <SimpleGrid
          cols={{ base: 2, md: 3, lg: 6 }}
          spacing="lg"
          className="mb-12"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <Text className="text-gray-500 font-semibold text-sm">
                {logo}
              </Text>
            </motion.div>
          ))}
        </SimpleGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <blockquote className="text-lg italic text-gray-700 leading-relaxed">
            "Tinktalk đã giúp đội ngũ của chúng tôi chuẩn hoá quy trình đào tạo
            và nâng cao hiệu suất giao tiếp một cách đáng kể."
          </blockquote>
          <Text className="mt-4 text-gray-600 font-semibold">
            — CHRO, Tập đoàn hàng đầu
          </Text>
        </motion.div>
      </Container>
    </section>
  );
}
