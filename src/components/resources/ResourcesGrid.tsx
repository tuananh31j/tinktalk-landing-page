"use client";

import { Container, Card, Title, Text, Button } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBook,
  IconHelp,
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Link from "next/link";

export function ResourcesGrid() {
  const resources = [
    {
      icon: IconBook,
      title: "Blog",
      description: "Các bài viết và nghiên cứu về kỹ năng giao tiếp và AI",
      href: "https://docs.google.com/document/d/1JxZhCbNEzK0lVBfs2MPKggQD2sw_dPy0KUNJtnleYJI/edit",
      external: true,
    },
    {
      icon: IconHelp,
      title: "Trung tâm trợ giúp",
      description: "Hướng dẫn sử dụng và câu hỏi thường gặp",
      href: "#",
      disabled: false,
    },
  ];

  const community = [
    {
      icon: IconBrandDiscord,
      title: "Discord",
      description: "Tham gia cộng đồng Discord của chúng tôi",
      href: "https://discord.gg/PhSQbHZQmh",
      color: "indigo",
    },
    {
      icon: IconBrandFacebook,
      title: "Facebook Group",
      description: "Kết nối với người dùng Tinktalk",
      href: "https://www.facebook.com/groups/tinktalk",
      color: "blue",
    },
  ];

  const social = [
    {
      icon: IconBrandFacebook,
      title: "Facebook Page",
      href: "https://www.facebook.com/share/1EDoELRveQ/?mibextid=wwXIfr",
      color: "blue",
    },
    {
      icon: IconBrandLinkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/company/107569291",
      color: "blue",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <Container size="lg">
        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Title order={2} className="text-3xl font-bold mb-6">
            Resources Hub (Tài nguyên)
          </Title>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {resource.disabled ? (
                  <Card
                    shadow="md"
                    padding="xl"
                    radius="lg"
                    className="h-full border border-gray-200 opacity-50 cursor-not-allowed"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#cc2038] to-[#a81a2e]">
                        <resource.icon size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <Title order={3} className="text-xl font-bold mb-2">
                          {resource.title}
                        </Title>
                        <Text className="text-gray-600">
                          {resource.description}
                        </Text>
                      </div>
                    </div>
                  </Card>
                ) : (
                  <Card
                    shadow="md"
                    padding="xl"
                    radius="lg"
                    className="h-full border border-gray-200 hover:shadow-xl transition-all"
                    component={Link}
                    href={resource.href}
                    target={resource.external ? "_blank" : undefined}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#cc2038] to-[#a81a2e]">
                        <resource.icon size={28} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <Title order={3} className="text-xl font-bold mb-2">
                          {resource.title}
                        </Title>
                        <Text className="text-gray-600">
                          {resource.description}
                        </Text>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <Title order={2} className="text-3xl font-bold mb-6">
            Community (Cộng đồng)
          </Title>

          <div className="grid md:grid-cols-2 gap-6">
            {community.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  shadow="md"
                  padding="xl"
                  radius="lg"
                  className="h-full border border-gray-200 hover:shadow-xl transition-all"
                  component={Link}
                  href={item.href}
                  target="_blank"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${
                        item.color === "indigo"
                          ? "from-indigo-500 to-indigo-600"
                          : "from-blue-500 to-blue-600"
                      }`}
                    >
                      <item.icon size={28} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <Title order={3} className="text-xl font-bold mb-2">
                        {item.title}
                      </Title>
                      <Text className="text-gray-600">{item.description}</Text>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title order={2} className="text-3xl font-bold mb-6">
            Official Channels (Kênh chính thức)
          </Title>

          <div className="flex flex-wrap gap-4">
            {social.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Button
                  component={Link}
                  href={item.href}
                  target="_blank"
                  size="lg"
                  variant="outline"
                  leftSection={<item.icon size={20} />}
                  className="hover:bg-blue-50"
                >
                  {item.title}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
