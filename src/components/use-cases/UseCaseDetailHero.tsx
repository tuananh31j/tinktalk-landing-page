"use client";

import { Container, Title, Text, Button, Group } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";

interface UseCaseDetailHeroProps {
  title: string;
  subtitle: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

export function UseCaseDetailHero({
  title,
  subtitle,
  ctaPrimary = "Tư vấn riêng",
  ctaSecondary = "Xem mẫu báo cáo",
}: UseCaseDetailHeroProps) {
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
            {title}
          </Title>

          <Text
            size="xl"
            className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto"
          >
            {subtitle}
          </Text>

          <Group justify="center" gap="md">
            <Button
              component={Link}
              href="/consultation"
              size="lg"
              className="bg-[#cc2038] hover:bg-[#a81a2e]"
              styles={{ root: { border: "none" } }}
            >
              {ctaPrimary}
            </Button>
            <Button
              component={Link}
              href="/demo"
              size="lg"
              variant="outline"
              color="dark"
            >
              {ctaSecondary}
            </Button>
          </Group>
        </motion.div>
      </Container>
    </section>
  );
}
