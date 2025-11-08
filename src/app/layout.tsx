import { ColorSchemeScript } from "@mantine/core";
import Providers from "~/app/providers";
import { Inter as fontSans } from "next/font/google";
import { Metadata, Viewport } from "next";

const font = fontSans({ subsets: ["vietnamese"], weight: "400" });

export const viewport: Viewport = {
  colorScheme: "normal",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#F9F9F9",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0d0d0d",
    },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className="text-[12px] md:text-[14px] lg:text-[16px]"
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className={font.className} id="root">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
