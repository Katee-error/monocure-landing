import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import {
  AboutProduct,
  BeforeAfter,
  Benefits,
  Hero,
  PromoCode,
  Quality,
  Reviews,
  Use,
} from "@/components/shared";

import { Box, Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <PromoCode />
      <Header />
      <Hero />
      <Benefits />
      <Use />
      <Quality />
      <Reviews />
      <BeforeAfter />
      <Footer/>
    </Box>
  );
}
