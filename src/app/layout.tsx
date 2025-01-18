import type { Metadata } from "next";
import {Nunito, Poppins, Roboto, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'], 
  weight: ['400', '700'],        
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], 
  weight: ['400', '500', '700'], 
  display: 'swap',              
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Укажите нужные веса
  style: ['normal', 'italic'],  // Укажите стили
  display: 'swap',              // Рекомендуется для улучшения рендера
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
