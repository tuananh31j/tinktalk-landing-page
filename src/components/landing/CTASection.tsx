"use client";

import { Container, Title, Text, Button, Group } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-6 to-primary-8">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Title
            order={2}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Sẵn sàng để đo lường giá trị của giao tiếp?
          </Title>
          <Text size="xl" className="text-white/90 mb-8 max-w-2xl mx-auto">
            Bắt đầu hành trình nâng cao kỹ năng giao tiếp cho đội ngũ của bạn ngay hôm nay
          </Text>
          <Group justify="center" gap="md">
            <Button
              component={Link}
              href="/demo"
              size="xl"
              variant="white"
              color="primary"
              className="text-primary-6 hover:bg-gray-100 text-lg px-8"
            >
              Liên hệ Demo
            </Button>
            <Button
              component={Link}
              href="/pricing"
              size="xl"
              variant="outline"
              className="text-white border-white hover:bg-white/10 text-lg px-8"
            >
              Xem bảng giá
            </Button>
          </Group>
        </motion.div>
      </Container>
    </section>
  );
}
