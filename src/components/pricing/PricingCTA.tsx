"use client";

import { Container, Title, Text, Button } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";

export function PricingCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#cc2038] to-[#a81a2e] text-white">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Title className="text-4xl md:text-5xl font-bold mb-6">
            Đầu tư vào năng lực Giao tiếp.<br />
            Tối ưu hiệu suất Doanh nghiệp.
          </Title>

          <Button
            component={Link}
            href="/demo"
            size="xl"
            variant="white"
            className="mt-8 text-[#cc2038] font-semibold hover:bg-gray-100"
          >
            Yêu cầu một buổi Demo chiến lược
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
