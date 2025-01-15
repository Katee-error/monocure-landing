import type { Metadata } from "next";
import {Nunito, Roboto, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "../theme";

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
      <body className={roboto.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
