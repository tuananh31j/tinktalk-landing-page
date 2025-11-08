"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Card,
  List,
  ThemeIcon,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconCheck, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export function PricingSection() {
  const plans = [
    {
      name: "DOANH NGHIỆP",
      description:
        "Giải pháp nền tảng dành cho các phòng ban hoặc doanh nghiệp cần chuẩn hoá và đo lường kỹ năng giao tiếp",
      features: [
        "Bảng Báo cáo Quản trị viên & Đội nhóm",
        "Chỉ định Lộ trình & Kịch bản",
        "Tuỳ chỉnh Bộ tiêu chí & Nhân vật AI",
        "Phân tích AI chuyên sâu",
        "Bảo mật cấp độ Doanh nghiệp",
        "Hỗ trợ SSO & Quản lí dữ liệu",
      ],
    },
    {
      name: "TẬP ĐOÀN",
      description:
        "Giải pháp toàn diện dành cho Tập đoàn lớn cần khả năng tích hợp và tuỳ biến ở quy mô lớn",
      featured: true,
      features: [
        "Bao gồm Mọi thứ trong gói DOANH NGHIỆP",
        "Hỗ trợ tích hợp Hệ sinh thái (LMS, HRIS, CRM)",
        "Quản lí tài khoản chuyên biệt",
        "Hỗ trợ Kỹ thuật và Đào tạo chuyên sâu",
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container size="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Title className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Đầu tư vào <span className="text-[#cc2038]">kỹ năng</span>.<br />
            Tối ưu <span className="text-[#cc2038]">hiệu suất</span>.
          </Title>
          <Text size="xl" className="text-gray-600 max-w-3xl mx-auto">
            Các gói giải pháp được thiết kế để mở khoá tiềm năng giao tiếp của
            đội ngũ và chứng minh giá trị đầu tư cho doanh nghiệp của bạn.
          </Text>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="h-full"
            >
              <Card
                shadow="lg"
                padding="xl"
                radius="lg"
                className={`h-full border-2 flex flex-col justify-between ${
                  plan.featured
                    ? "border-[#cc2038] bg-gradient-to-br from-red-50 to-white"
                    : "border-gray-200"
                }`}
              >
                {plan.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <IconSparkles size={20} className="text-[#cc2038]" />
                    <Text size="sm" className="font-semibold text-[#cc2038]">
                      PHỔ BIẾN NHẤT
                    </Text>
                  </div>
                )}

                <Title order={2} className="text-2xl font-bold mb-3">
                  Gói {plan.name}
                </Title>

                <Text className="text-gray-600 mb-6 leading-relaxed">
                  {plan.description}
                </Text>

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <List
                      spacing="md"
                      icon={
                        <ThemeIcon color="green" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }
                    >
                      {plan.features.map((feature, idx) => (
                        <List.Item key={idx}>
                          <Text
                            className={
                              feature.includes("Bao gồm") ? "font-semibold" : ""
                            }
                          >
                            {feature}
                          </Text>
                        </List.Item>
                      ))}
                    </List>
                  </div>

                  <Button
                    component={Link}
                    href="/demo"
                    size="lg"
                    fullWidth
                    className={`mt-6 ${
                      plan.featured
                        ? "bg-[#cc2038] hover:bg-[#a81a2e]"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    styles={{ root: { border: "none" } }}
                  >
                    Tư vấn riêng
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
