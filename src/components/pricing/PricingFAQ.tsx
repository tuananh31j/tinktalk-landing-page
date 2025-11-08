"use client";

import { Container, Title, Accordion, Text } from "@mantine/core";
import { motion } from "framer-motion";

export function PricingFAQ() {
  const faqs = [
    {
      question: "Làm thế nào để chúng tôi mua gói Doanh nghiệp?",
      answer:
        "Vui lòng 'Tư vấn riêng'. Đội ngũ của chúng tôi sẽ làm việc với bạn để hiểu rõ nhu cầu và cấu hình một gói giải pháp phù hợp, bao gồm chiết khấu số lượng lớn và các tính năng quản trị cấp cao.",
    },
    {
      question:
        "Tinktalk tích hợp với các hệ thống (LMS, CRM) của chúng tôi như thế nào?",
      answer:
        "Chúng tôi hỗ trợ tích hợp các nền tảng hàng đầu (LMS, CRM, HRIS) thông qua các tiêu chuẩn API và LTI. Lộ trình của chúng tôi ưu tiên hệ sinh thái mà các doanh nghiệp Việt Nam đang sử dụng.",
    },
    {
      question: "Dữ liệu của chúng tôi được xử lí và bảo mật ra sao?",
      answer:
        "Bảo mật là cốt lõi. Mọi bản ghi đều được mã hoá và riêng tư mặc định. Dữ liệu của tổ chức **không** được dùng để huấn luyện mô hình AI chung. Chúng tôi cung cấp các tuỳ chọn 'Tự động xoá Dữ liệu' để tuân thủ chính sách nội bộ của bạn.",
    },
    {
      question: "Chúng tôi có thể tuỳ chỉnh kịch bản luyện tập không?",
      answer:
        "Có. Quản trị viên có toàn quyền tạo các kịch bản, nhân vật AI và bộ tiêu chí chấm điểm độc quyền, phù hợp với quy trình và văn hoá doanh nghiệp.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title className="text-3xl md:text-4xl font-bold text-center mb-12">
            Câu hỏi thường gặp
          </Title>

          <Accordion
            variant="separated"
            radius="lg"
            classNames={{
              item: "border border-gray-200 mb-4",
              control: "hover:bg-gray-50",
            }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Accordion.Item value={`faq-${index}`}>
                  <Accordion.Control>
                    <Text className="font-semibold text-lg">
                      {faq.question}
                    </Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </Container>
    </section>
  );
}
