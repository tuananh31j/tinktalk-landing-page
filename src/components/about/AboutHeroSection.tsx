"use client";

import { Container, Title, Text } from "@mantine/core";
import { motion } from "framer-motion";

export function AboutHeroSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Title className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Tương lai của Huấn luyện:
            <br />
            <span className="text-[#cc2038]">Phòng Gym AI</span> cho kỹ năng con
            người.
          </Title>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <Text>
              Trong nhiều năm, chúng ta đã cố gắng làm chủ kỹ năng giao tiếp–một
              trong những kỹ năng phức tạp nhất–bằng phương pháp truyền thống:
            </Text>

            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3">
                <span className="text-[#cc2038] font-bold">×</span>
                <Text>
                  Đọc tài liệu không chuẩn bị cho chúng ta trước một cuộc đàm
                  phán áp lực cao.
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#cc2038] font-bold">×</span>
                <Text>
                  Học theo quản lí không đảm bảo bạn sẵn sàng cho các tình huống
                  thực chiến.
                </Text>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#cc2038] font-bold">×</span>
                <Text>
                  Luyện tập trước gương thiếu sự tương tác và không có vòng lặp
                  phản hồi.
                </Text>
              </li>
            </ul>

            <Text className="pt-4 text-xl font-semibold text-gray-900">
              Đó là lý do chúng tôi xây dựng Tinktalk.
            </Text>

            <Text>
              Chúng tôi tin rằng cách duy nhất để làm chủ một kỹ năng là thông
              qua luyện tập có chủ đích và phản hồi tức thì. Tinktalk là một
              "phòng gym AI" an toàn, cho phép các đội nhóm mô phỏng các cuộc
              gọi hội thoại quan trọng–từ các buổi chào hàng đến các cuộc phỏng
              vấn tuyển dụng–nhận phản hồi chuyên sâu và không phán xét, bất cứ
              lúc nào, bất cứ đâu.
            </Text>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
