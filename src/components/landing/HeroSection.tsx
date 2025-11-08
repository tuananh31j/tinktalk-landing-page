"use client";

import { Container, Title, Text, Button, Group } from "@mantine/core";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { IconPlayerPlay } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Force video to play on mount
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  return (
    <section className="relative py-11 md:py-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50/30 opacity-60" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cc2038]/5 rounded-full blur-3xl" />

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge with shimmer effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-md text-sm font-medium border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                AI Training dành riêng cho doanh nghiệp
              </span>
            </motion.div>

            {/* Headline with stagger animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                Làm chủ mọi cuộc{" "}
                <motion.span
                  className="inline-block text-[#cc2038] relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  hội thoại
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#cc2038] to-transparent rounded-full"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                  />
                </motion.span>{" "}
                then chốt
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Nền tảng Huấn luyện AI giúp đội ngũ của bạn{" "}
                <strong className="font-semibold text-gray-900">
                  luyện tập – phản hồi – cải thiện
                </strong>{" "}
                và tối ưu hoá các kỹ năng giao tiếp trong công việc.
              </p>
            </motion.div>

            {/* CTAs with hover effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <div className="flex flex-wrap gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    component={Link}
                    href="/demo"
                    size="xl"
                    className="bg-[#cc2038] hover:bg-[#a81a2e] text-white font-semibold h-14 px-10 rounded-lg transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30"
                    styles={{
                      root: {
                        border: "none",
                      },
                    }}
                  >
                    Tư vấn ngay
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Video Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900">
              {/* Video */}
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto block relative z-10"
                onLoadedMetadata={() => {
                  console.log("Video metadata loaded");
                }}
                onLoadedData={() => {
                  console.log("Video data loaded successfully");
                  setVideoLoaded(true);
                  videoRef.current?.play();
                }}
              >
                <source src="/howToUse.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Overlay gradient for better visual */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none z-5" />
            </div>

            {/* Floating elements for visual interest */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-[#cc2038]/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
