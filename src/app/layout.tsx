import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CookieBanner, PromoCode } from "@/components/shared";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Box } from "@chakra-ui/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monocure",
  description: "ALL-IN-ONE solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <ThemeProvider>
            <PromoCode />
            <Header />
            <Box flex="1">{children}</Box>
            <Footer />
            <CookieBanner />
          </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
