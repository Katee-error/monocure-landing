import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CookieBanner } from "@/components/shared";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Box } from "@chakra-ui/react";
import { StickyButton } from "@/components/ui/sticky-button";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cleaner.monocure.ee"),
  title: "Monocure",
  description: "ALL-IN-ONE solution",
  robots: "index, follow",
  twitter: {
    card: "summary_large_image",
    title: "Monocure",
    description: "All-in-one solution",
    images: "/assets/opengraph-image.png",
  },
  openGraph: {
    type: "website",
    url: "https://cleaner.monocure.ee",
    title: "Monocure",
    description: "All-in-one solution",
    siteName: "Monocure",
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
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>

        <Box display="flex" flexDirection="column" minHeight="100vh">
          <ThemeProvider>
            <Header />
            <Box flex="1">{children}</Box>
            <Footer />
            <StickyButton />
            <CookieBanner />
          </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
