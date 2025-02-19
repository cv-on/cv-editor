import clsx from "clsx";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import RecoilRootProvider from "@/providers/recoil-root";
import StyledComponentsRegistry from "@/providers/styled-components";

import "@usy-ui/base/dist/styles.css";

const poppins = Poppins({
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
      <body className={clsx(poppins.className)}>
        <StyledComponentsRegistry>
          <RecoilRootProvider>{children}</RecoilRootProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
