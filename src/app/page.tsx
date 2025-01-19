import {
  AboutProduct,
  BeforeAfter,
  Benefits,
  Hero,
  Quality,
  Reviews,
  Use,
  Using,
} from "@/components/shared";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />
      <Benefits />
      <AboutProduct />
      <Using />
      <Use />
      <Quality />
      <Reviews />
      <BeforeAfter />
    </Box>
  );
}
