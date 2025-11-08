"use client";

import { Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { IconNumber1, IconNumber2, IconNumber3 } from "@tabler/icons-react";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  const icons = [IconNumber1, IconNumber2, IconNumber3];

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Title className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cách Tinktalk hoạt động
          </Title>
        </motion.div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = icons[index] || IconNumber1;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#cc2038] to-[#a81a2e] flex items-center justify-center">
                  {Icon && <Icon size={24} className="text-white" />}
                </div>
                <div className="flex-1">
                  <Title order={3} className="text-xl font-bold mb-3">
                    {step.title}
                  </Title>
                  <Text className="text-gray-600 leading-relaxed">
                    {step.description}
                  </Text>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
