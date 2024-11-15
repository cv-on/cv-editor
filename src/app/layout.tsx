import clsx from "clsx";
import type { Metadata } from "next";
import { Lora, Montserrat } from "next/font/google";

import StyledComponentsRegistry from "@/lib/register";

import "@usy-ui/base/dist/styles.css";

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cvon | Make CV online for free",
  description: "A free tool for creating CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(lora.className, montserrat.className)}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
