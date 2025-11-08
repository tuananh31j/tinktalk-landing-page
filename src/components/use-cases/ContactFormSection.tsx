"use client";

import {
  Container,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Select,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";

interface ContactFormSectionProps {
  title: string;
  description?: string;
  isPartnerForm?: boolean;
}

export function ContactFormSection({
  title,
  description,
  isPartnerForm = false,
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employeeCount: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Title className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            {title}
          </Title>

          {description && (
            <Text className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              {description}
            </Text>
          )}

          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
          >
            <div className="space-y-4">
              <TextInput
                label="Họ và tên"
                placeholder="Nguyễn Văn A"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.currentTarget.value })
                }
                styles={{
                  label: { color: "white", marginBottom: "0.5rem" },
                  input: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                  },
                }}
              />

              <TextInput
                label="Email"
                type="email"
                placeholder="email@company.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.currentTarget.value })
                }
                styles={{
                  label: { color: "white", marginBottom: "0.5rem" },
                  input: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                  },
                }}
              />

              <TextInput
                label="Công ty"
                placeholder="Tên công ty"
                required
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.currentTarget.value })
                }
                styles={{
                  label: { color: "white", marginBottom: "0.5rem" },
                  input: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                  },
                }}
              />

              <Select
                label="Số lượng nhân viên"
                placeholder="Chọn quy mô"
                required
                data={[
                  { value: "1-50", label: "1-50 nhân viên" },
                  { value: "51-200", label: "51-200 nhân viên" },
                  { value: "201-500", label: "201-500 nhân viên" },
                  { value: "500+", label: "500+ nhân viên" },
                ]}
                value={formData.employeeCount}
                onChange={(value) =>
                  setFormData({ ...formData, employeeCount: value || "" })
                }
                styles={{
                  label: { color: "white", marginBottom: "0.5rem" },
                  input: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                  },
                }}
              />

              <Textarea
                label="Tin nhắn"
                placeholder="Chia sẻ thêm về nhu cầu của bạn..."
                minRows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.currentTarget.value })
                }
                styles={{
                  label: { color: "white", marginBottom: "0.5rem" },
                  input: {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    color: "white",
                  },
                }}
              />

              <Button
                type="submit"
                size="lg"
                fullWidth
                className="bg-[#cc2038] hover:bg-[#a81a2e] mt-6"
                styles={{ root: { border: "none" } }}
              >
                Gửi thông tin
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
