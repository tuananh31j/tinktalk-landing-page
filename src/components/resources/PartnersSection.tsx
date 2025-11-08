"use client";

import { Container, Title, Text, SimpleGrid } from "@mantine/core";
import { motion } from "framer-motion";
import Image from "next/image";

export function PartnersSection() {
  const partners = [
    { name: "Vietnam National University, Hanoi", logo: "ĐHQGHN.png" },
    { name: "VNU Innovation Startup Incubator", logo: "VISI.jpg" },
    { name: "Entrepreneurship Lab", logo: "entrepreneurshipLab.png" },
    { name: "Sunwah Innovation Center", logo: "Sunwah.png" },
    { name: "Amazon Web Services", logo: "AWS" },
    { name: "Google Cloud", logo: "GoogleCloud.png" },
    { name: "TikTok", logo: "TikTok.png" },
    { name: "Mắt Bão", logo: "matbao.png" },
    { name: "Fundwise", logo: "fundwise.webp" }
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
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Hệ sinh thái <span className="text-[#cc2038]">Đối tác</span>
          </Title>
          <Text className="text-gray-600">
            Được hỗ trợ bởi các tổ chức hàng đầu
          </Text>
        </motion.div>

        <SimpleGrid cols={{ base: 2, sm: 3, md: 4, lg: 5 }} spacing="xl">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow grayscale hover:grayscale-0"
            >
              <div className="w-full h-16 relative">
                {/* Placeholder - replace with actual logos */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded">
                  <Text size="xs" className="text-gray-400 text-center px-2">
                    {partner.name}
                  </Text>
                </div>
              </div>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
