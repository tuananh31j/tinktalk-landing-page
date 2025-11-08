import {
  Anchor,
  Group,
  Text,
  Container,
  SimpleGrid,
  Title,
  Stack,
  ActionIcon,
} from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandDiscord,
} from "@tabler/icons-react";
import Image from "next/image";

const footerLinks = {
  product: [
    { label: "Tính năng", href: "/platform/features" },
    { label: "Bảng giá", href: "/pricing" },
    { label: "Bảo mật", href: "/platform/security" },
    { label: "Tích hợp", href: "/platform/integrations" },
  ],
  useCases: [
    { label: "Sales", href: "/use-cases/sales" },
    { label: "L&D", href: "/use-cases/learning" },
    { label: "HR", href: "/use-cases/hr" },
    { label: "Leadership", href: "/use-cases/leadership" },
  ],
  company: [
    { label: "Về chúng tôi", href: "/about" },
    { label: "Blog", href: "/resources/blog" },
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Liên hệ", href: "/contact" },
  ],
  legal: [
    { label: "Chính sách bảo mật", href: "/privacy" },
    { label: "Điều khoản sử dụng", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
  community: [
    { label: "Discord", href: "https://discord.gg/PhSQbHZQmh" },
    {
      label: "Facebook Group",
      href: "https://www.facebook.com/groups/tinktalk",
    },
  ],
  official: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1EDoELRveQ/?mibextid=wwXIfr",
    },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/107569291" },
  ],
};

const Footer = () => {
  const renderLink = (link: { label: string; href: string }) => {
    const isExternal = link.href.startsWith("http");
    if (isExternal) {
      return (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white no-underline text-sm block"
        >
          {link.label}
        </a>
      );
    }

    return (
      <Anchor
        key={link.href}
        component={Link}
        href={link.href}
        size="sm"
        className="text-gray-300 hover:text-white no-underline text-sm block"
      >
        {link.label}
      </Anchor>
    );
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container size="xl" className="py-12">
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 4 }}
          spacing="lg"
          className="mb-8"
        >
          {/* Brand + description + social */}
          <div>
            <Link href="/" className="no-underline flex items-center gap-2">
              <Image
                src="/img/TINKTALK-12.png"
                alt="Tinktalk Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
            <Text size="sm" className="text-gray-400 max-w-xs mb-4">
              Nền tảng AI Roleplay giúp bạn làm chủ mọi cuộc đối thoại quan
              trọng.
            </Text>

            <div className="flex items-center gap-3 mt-2">
              <ActionIcon
                component="a"
                href="https://www.facebook.com/share/1EDoELRveQ/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-gray-800 hover:bg-gray-800/80"
              >
                <IconBrandFacebook size={18} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://www.linkedin.com/company/107569291"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-gray-800 hover:bg-gray-800/80"
              >
                <IconBrandLinkedin size={18} />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="https://discord.gg/PhSQbHZQmh"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="bg-gray-800 hover:bg-gray-800/80"
              >
                <IconBrandDiscord size={18} />
              </ActionIcon>
            </div>
          </div>

          {/* Product */}
          <div>
            <Title
              order={4}
              className="text-sm font-semibold mb-3 text-gray-200"
            >
              Sản phẩm
            </Title>
            <div className="space-y-2">
              {footerLinks.product.map(renderLink)}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <Title
              order={4}
              className="text-sm font-semibold mb-3 text-gray-200"
            >
              Trường hợp sử dụng
            </Title>
            <div className="space-y-2">
              {footerLinks.useCases.map(renderLink)}
            </div>
          </div>

          {/* Resources (Community + Official) */}
          <div>
            <Title
              order={4}
              className="text-sm font-semibold mb-3 text-gray-200"
            >
              Tài nguyên
            </Title>
            <div className="mb-3">
              <div className="text-xs font-medium text-gray-400 mb-2">
                Community
              </div>
              <div className="space-y-2">
                {footerLinks.community.map(renderLink)}
              </div>
            </div>

            <div>
              <div className="text-xs font-medium text-gray-400 mb-2">
                Official channels
              </div>
              <div className="space-y-2">
                {footerLinks.official.map(renderLink)}
              </div>
            </div>
          </div>
        </SimpleGrid>

        <div className="pt-8 border-t border-gray-800">
          <Group justify="center">
            <Text className="text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Tinktalk. Bản quyền đã được bảo hộ.
            </Text>
          </Group>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
