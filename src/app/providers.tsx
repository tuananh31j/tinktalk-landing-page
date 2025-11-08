"use client";

import "~/styles/globals.css";

import { MantineProvider } from "~/context/MantineContext";
import { AbstractIntlMessages } from "next-intl";

const Providers = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MantineProvider>
        {children}
    </MantineProvider>
  );
};

export default Providers;
