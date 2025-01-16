import { Header } from "@/components/layout/header";
import { Benefits, Hero, PromoCode, Reviews, Use } from "@/components/shared";

import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <PromoCode />
      <Header />
      <Hero />
      <Benefits />
      <Use />
      <Reviews />
      
    </Box>
  );
}
