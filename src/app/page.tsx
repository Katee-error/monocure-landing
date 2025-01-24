import {
  BeforeAfter,
  Hero,
  Quality,
  Reviews,
  Use,
  Using,
} from "@/components/shared";
import VideoReview from "@/components/shared/video";

import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box>
      <Hero /> 
      <VideoReview />
      <BeforeAfter />
      <Use />
      <Quality />
      <Reviews />
    </Box>
  );
}
