import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CookieBanner } from "@/components/shared";
import { Header } from "@/components/layout/header";
import { Box } from "@chakra-ui/react";
import { StickyButton } from "@/components/ui/sticky-button";
import Script from "next/script";
import './global.css'
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleaner.monocure.ee"),
 title: "Monocure | Powerful Bleach & Cleaner",
  keywords: [
    "bleach",
    "cleaner",
    "powerful cleaner",
    "universal cleaner",
    "effective bleach",
    "professional cleaner",
    "eco-friendly cleaner",
    "chlorine-free bleach",
    "safe bleach",
    "concentrated cleaner",
    "fabric bleach",
    "clothing bleach",
    "surface cleaner",
    "kitchen cleaner",
    "bathroom cleaner",
    "stain remover",
    "tile cleaner",
    "plastic bleach",
    "glass cleaner",
    "degreaser",
    "buy bleach",
    "buy cleaner",
    "order bleach",
    "effective cleaning solution",
    "professional cleaning products",
    "best stain remover"
  ],
  description: "High-quality bleach and cleaners for effective stain removal and surface cleaning. Safe and eco-friendly solutions.",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "Monocure | Powerful Bleach & Cleaner",
    description: "High-quality bleach and cleaners for effective stain removal and surface cleaning. Safe and eco-friendly solutions.",
    images: "/assets/opengraph-image.png",
  },
  openGraph: {
    type: "website",
    url: "https://cleaner.monocure.ee",
    title: "Monocure | Powerful Bleach & Cleaner",
    description: "High-quality bleach and cleaners for effective stain removal and surface cleaning. Safe and eco-friendly solutions.",
    siteName:"Monocure | Powerful Bleach & Cleaner",
    images: {
      url: "/assets/opengraph-image.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'pixel ID');
          fbq('track', 'PageView');
        `}
      </Script>
      <body className={poppins.className}>
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1039780977830987&ev=PageView&noscript=1"
            alt={""}          />
        </noscript>

        <Box display="flex" flexDirection="column" minHeight="100vh">
          <ThemeProvider>
            <Header />
            <Box flex="1">{children}</Box>
            <StickyButton />
            <CookieBanner />
          </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
