import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "../theme";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CookieBanner, PromoCode } from "@/components/shared";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Box } from "@chakra-ui/react";
import { StickyButton } from "@/components/ui/sticky-button";
import Head from "next/head"; 


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
      <Head>
          {/* Мета-теги для SEO и аналитики */}
          <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
          <meta property="og:title" content="Monocure" />
          <meta property="og:description" content="ALL-IN-ONE solution" />
          <meta property="og:image" content="URL_to_image.jpg" />
          <meta property="og:url" content="https://your-site.com" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Monocure" />
          <meta name="twitter:description" content="ALL-IN-ONE solution" />
          <meta name="twitter:image" content="URL_to_image.jpg" />
          
          {/* Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'YOUR_GA_ID');
              `,
            }}
          />
          
          {/* Meta Pixel Code */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', 'pixel ID')
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img height="1" width="1" style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
            />
          </noscript>
          {/* End Meta Pixel Code */}
        </Head>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <ThemeProvider>
            <Header />
            <Box flex="1">{children}</Box>
            <Footer />
            <StickyButton/>
            <CookieBanner />
          </ThemeProvider>
        </Box>
      </body>
    </html>
  );
}
