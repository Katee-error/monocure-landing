import { Header } from "@/components/layout/header";
import { Benefits, Hero, PromoCode } from "@/components/shared";
import { Box, Container } from "@chakra-ui/react";


export default function Home() {
  return (
    <Box>
      <PromoCode />
      <Header />
      <Hero />
      <Benefits/>

    </Box>
  );
}
