"use client";

import { Container, Title, Button } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";

export function UseCasesCTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Title className="text-4xl md:text-5xl font-bold mb-8">
            Sẵn sàng để đo lường
            <br />
            năng lực đội ngũ của bạn?
          </Title>

          <Button
            component={Link}
            href="/demo"
            size="xl"
            className="bg-[#cc2038] hover:bg-[#a81a2e]"
            styles={{ root: { border: "none" } }}
          >
            Yêu cầu một buổi Demo chiến lược
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
