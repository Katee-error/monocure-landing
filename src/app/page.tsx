import { BeforeAfter, Hero, Quality, Reviews } from "@/components/shared";
import VideoReview from "@/components/shared/video";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />
      <VideoReview />
      <BeforeAfter />
      <Quality />
      <Reviews />
    </Box>
  );
}
