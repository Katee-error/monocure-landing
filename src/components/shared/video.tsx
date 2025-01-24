import { Box, AspectRatio, Text, Heading } from "@chakra-ui/react";

const VideoReview = () => {
  return (
    <Box bg="white" borderRadius="md" p={4} textAlign="center" mt={8}>
      <Heading textAlign="center" mb={["20px", "40px"]}>
      Video Übersicht
      </Heading>
      <AspectRatio ratio={16 / 9} maxW="80%" mx="auto">
        <iframe
          title="Video Übersicht"
          src="/assets/video/monocure.mp4"
          allowFullScreen
          allow="mute"
          
         
        />
      </AspectRatio>
    </Box>
  );
};

export default VideoReview;
