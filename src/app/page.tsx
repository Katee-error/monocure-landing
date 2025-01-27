import { BeforeAfter, Hero, Quality, Reviews } from "@/components/shared";
import { Application } from "@/components/shared/application";
import VideoReview from "@/components/shared/video";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero />
      <VideoReview />
      <BeforeAfter />
      <Application/>
      <Quality />
      <Reviews />
    </Box>
  );
}
