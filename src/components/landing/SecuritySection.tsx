"use client";

import { Container, Title, Text, SimpleGrid, Card } from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconShieldCheck,
  IconLock,
  IconCertificate,
} from "@tabler/icons-react";

const securityFeatures = [
  {
    icon: IconShieldCheck,
    title: "Kiểm soát Quản trị Toàn diện",
    description:
      "Cung cấp cho Quản trị viên quyền quản lí thành viên, gán họ vào các nhóm, và phân phối nội dung đào tạo độc quyền theo từng phòng ban.",
  },
  {
    icon: IconLock,
    title: "Quyền riêng tư là Mặc định",
    description:
      "Mọi bản ghi đều là Riêng tư mặc định, được mã hoá. Dữ liệu của bạn không được dùng để huấn luyện mô hình AI của chúng tôi.",
  },
  {
    icon: IconCertificate,
    title: "Tuân thủ Tiêu chuẩn Cao cấp",
    description:
      "Hỗ trợ Đăng nhập Một lần (SSO) cung cấp các tuỳ chọn Tự động xoá Dữ liệu để tuân thủ chính sách nội bộ của doanh nghiệp.",
  },
];

export function SecuritySection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <Title order={2} className="text-4xl md:text-5xl font-bold mb-4">
            Kiến trúc nền tảng dành cho Doanh nghiệp
          </Title>
          <Text size="xl" className="text-gray-600 mb-12">
            Đội ngũ Bảo mật và CNTT của bạn sẽ tin tưởng chúng tôi
          </Text>
        </motion.div>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card
                shadow="sm"
                padding="xl"
                radius="md"
                className="h-full text-center border border-gray-200"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <feature.icon
                      size={48}
                      className="text-green-600"
                      stroke={1.5}
                    />
                  </div>
                </div>
                <Title order={3} className="text-xl font-semibold mb-4">
                  {feature.title}
                </Title>
                <Text className="text-gray-600 leading-relaxed">
                  {feature.description}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
