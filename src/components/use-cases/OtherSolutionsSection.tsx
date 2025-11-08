"use client";

import { Container, Title, Card, Text, SimpleGrid } from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  IconChartLine,
  IconPresentation,
  IconUsers,
  IconSchool,
} from "@tabler/icons-react";

interface Solution {
  icon: any;
  title: string;
  href: string;
}

interface OtherSolutionsSectionProps {
  currentPath: string;
}

export function OtherSolutionsSection({
  currentPath,
}: OtherSolutionsSectionProps) {
  const allSolutions: Solution[] = [
    {
      icon: IconChartLine,
      title: "Huấn luyện Đội ngũ kinh doanh",
      href: "/use-cases/ho-tro-kinh-doanh",
    },
    {
      icon: IconPresentation,
      title: "Chuẩn bị Thuyết trình",
      href: "/use-cases/luyen-tap-thuyet-trinh",
    },
    {
      icon: IconUsers,
      title: "Luyện tập Phỏng vấn",
      href: "/use-cases/chuan-bi-phong-van",
    },
    {
      icon: IconSchool,
      title: "Đào tạo & Phát triển",
      href: "/use-cases/dao-tao-phat-trien",
    },
  ];

  const solutions = allSolutions.filter((s) => s.href !== currentPath);

  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Title className="text-3xl md:text-4xl font-bold mb-4">
            Các giải pháp khác của Tinktalk
          </Title>
        </motion.div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card
                component={Link}
                href={solution.href}
                shadow="md"
                padding="xl"
                radius="lg"
                className="h-full border border-gray-200 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#cc2038] to-[#a81a2e] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <solution.icon size={32} className="text-white" />
                  </div>
                  <Text className="font-semibold text-gray-900">
                    {solution.title}
                  </Text>
                </div>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
