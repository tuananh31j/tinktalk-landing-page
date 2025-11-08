"use client";

import { AppShell as MantineAppShell } from "@mantine/core";
import Footer from "~/components/layouts/Footer";
import { Header } from "~/components/layouts/Header";

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <MantineAppShell>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <MantineAppShell.Main className="min-h-screen">
        {children}
      </MantineAppShell.Main>

      {/* Footer */}
      <Footer />
    </MantineAppShell>
  );
};

export default MainLayout;
