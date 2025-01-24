import { Box, AspectRatio, Text, Heading } from "@chakra-ui/react";

const VideoReview = () => {
  return (
    <Box bg="white" mb='40px' borderRadius="md" p={4} textAlign="center" mt={8}>
      <Heading textAlign="center" mb={["20px", "40px"]}>
      Video Übersicht
      </Heading>
      <AspectRatio ratio={16 / 9} maxW={['100%', '80%']} mx="auto">
      <video
          title="Video Übersicht"
          src="/assets/video/monocure.mp4"
          controls
          muted 
          autoPlay
          loop
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </Box>
  );
};

export default VideoReview;
