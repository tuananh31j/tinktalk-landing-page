"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Group,
  Button,
  Menu,
  Container,
  Drawer,
  Stack,
  Burger,
  Divider,
  Collapse,
  UnstyledButton,
  Text,
} from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

type MenuItem = {
  label: string;
  path: string;
  disabled?: boolean;
  children?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    label: "Dành cho Doanh nghiệp",
    path: "/products",
    disabled: true,
  },
  {
    label: "Nền tảng",
    path: "/",
  },
  { label: "Bảng giá", path: "/pricing" },
  { label: "Về chúng tôi", path: "/about" },
  {
    label: "Tài nguyên",
    path: "/resources",
    children: [
      { label: "Blog", path: "/resources/blog", disabled: true },
      { label: "Trung tâm trợ giúp", path: "/resources/help", disabled: true },
      { label: "Trường hợp sử dụng", path: "/use-cases" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [openedMenus, setOpenedMenus] = useState<string[]>([]);

  const toggleMenu = (path: string) => {
    setOpenedMenus((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  // Desktop menu renderer
  const renderMenuItem = (item: MenuItem) => {
    // If the whole parent item is disabled, render a non-interactive button
    if (item.disabled) {
      return (
        <Button
          key={item.path}
          variant="white"
          color="dark"
          disabled
          className="text-gray-700 opacity-50 cursor-not-allowed"
        >
          {item.label}
        </Button>
      );
    }

    if (item.children && item.children.length > 0) {
      return (
        <Menu key={item.path} position="bottom-start" offset={5}>
          <Menu.Target>
            <Button
              variant="subtle"
              color="dark"
              rightSection={<IconChevronDown size={16} />}
              className="text-gray-700 hover:text-primary-6"
            >
              {item.label}
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            {item.children.map((child) =>
              child.disabled ? (
                <Menu.Item key={child.path} disabled>
                  {child.label}
                </Menu.Item>
              ) : (
                <Menu.Item key={child.path} component={Link} href={child.path}>
                  {child.label}
                </Menu.Item>
              )
            )}
          </Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Button
        key={item.path}
        component={Link}
        href={item.path}
        variant="subtle"
        color="dark"
        className="text-gray-700 hover:text-primary-6"
      >
        {item.label}
      </Button>
    );
  };

  // Mobile menu renderer
  const renderMobileMenuItem = (item: MenuItem) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpened = openedMenus.includes(item.path);
    if (hasChildren) {
      // If parent is disabled, render non-interactive label
      if (item.disabled) {
        return (
          <div key={item.path}>
            <div className="w-full px-6 py-5 flex items-center justify-between opacity-50 cursor-not-allowed">
              <Text className="text-gray-900 text-[17px] font-normal">
                {item.label}
              </Text>
            </div>
          </div>
        );
      }

      return (
        <div key={item.path}>
          <UnstyledButton
            onClick={() => toggleMenu(item.path)}
            className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <Text className="text-gray-900 text-[17px] font-normal">
              {item.label}
            </Text>
            <IconChevronRight
              size={20}
              className={`text-gray-400 transition-transform duration-200 ${
                isOpened ? "rotate-90" : ""
              }`}
            />
          </UnstyledButton>
          <Collapse in={isOpened}>
            <Stack
              gap={0}
              className="bg-gray-50 border-t border-b border-gray-100"
            >
              {item.children?.map((child) =>
                child.disabled ? (
                  <div
                    key={child.path}
                    className="w-full text-left px-10 py-4 text-gray-400 bg-gray-50 text-[15px]"
                  >
                    {child.label}
                  </div>
                ) : (
                  <UnstyledButton
                    key={child.path}
                    component={Link}
                    href={child.path}
                    onClick={closeDrawer}
                    className="w-full text-left px-10 py-4 text-gray-700 hover:text-primary-6 hover:bg-gray-100 transition-colors text-[15px]"
                  >
                    {child.label}
                  </UnstyledButton>
                )
              )}
            </Stack>
          </Collapse>
        </div>
      );
    }

    if (item.disabled) {
      return (
        <div
          key={item.path}
          className="w-full text-left px-6 py-5 text-gray-900 opacity-50 cursor-not-allowed text-[17px] font-normal"
        >
          {item.label}
        </div>
      );
    }

    return (
      <UnstyledButton
        key={item.path}
        component={Link}
        href={item.path}
        onClick={closeDrawer}
        className="w-full text-left px-6 py-5 text-gray-900 hover:bg-gray-50 transition-colors text-[17px] font-normal"
      >
        {item.label}
      </UnstyledButton>
    );
  };

  return (
    <>
      <Box component="header" className="border-b border-gray-200">
        <Container size="xl">
          <Group justify="space-between" py={16}>
            {/* Logo */}
            <Link href="/" className="no-underline flex items-center gap-2">
              <Image
                src="/img/TINKTALK-12.png"
                alt="Tinktalk Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>

            {/* Navigation & Action Buttons - Desktop */}
            <Group gap="sm" className="hidden md:flex">
              {menuItems.map(renderMenuItem)}
            </Group>
            <Group gap="sm" className="hidden md:flex">
              {/* Action Buttons */}
              <Button
                component={Link}
                href="/login"
                variant="subtle"
                color="dark"
                className="text-gray-700"
              >
                Đăng nhập
              </Button>
              <Button
                component={Link}
                href="/consultation"
                variant="filled"
                color="primary"
                className="bg-primary-6 hover:bg-primary-7"
              >
                Tư vấn riêng
              </Button>
            </Group>

            {/* Hamburger Menu - Mobile */}
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className="md:hidden"
              size="sm"
            />
          </Group>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding={0}
        title={
          <Link
            href="/"
            className="no-underline flex items-center gap-2"
            onClick={closeDrawer}
          >
            <Image
              src="/img/TINKTALK-12.png"
              alt="Tinktalk Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
        }
        className="md:hidden"
        styles={{
          content: {
            backgroundColor: "#ffffff",
          },
          header: {
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
            padding: "1rem 1.5rem",
          },
          body: {
            padding: 0,
            height: "calc(100vh - 65px)",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <div className="flex flex-col h-full bg-white">
          {/* Menu Items - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col">
              {menuItems.map(renderMobileMenuItem)}
            </div>
          </div>

          {/* Bottom Section with Buttons - Fixed */}
          <div className="border-t border-gray-200 p-6 bg-white">
            <Stack gap="md">
              <Button
                component={Link}
                href="/login"
                onClick={closeDrawer}
                variant="outline"
                size="lg"
                fullWidth
                className="border-2 border-primary text-primary hover:bg-gray-50 font-medium h-14 rounded-lg"
              >
                Đăng nhập
              </Button>
              <Button
                component={Link}
                href="/consultation"
                onClick={closeDrawer}
                variant="filled"
                size="lg"
                fullWidth
                className="bg-primary-6 hover:bg-primary-7 font-medium h-14 rounded-lg"
              >
                Tư vấn riêng
              </Button>
            </Stack>
          </div>
        </div>
      </Drawer>
    </>
  );
}
