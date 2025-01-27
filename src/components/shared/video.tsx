import { Box, AspectRatio } from "@chakra-ui/react";

export const  VideoReview = () => {
  return (
    <Box bg="white" mb="40px" borderRadius="md" p={4} textAlign="center" mt={8}>

      <AspectRatio ratio={16 / 9} maxW={["100%", "90%"]} mx="auto">
        <video
          title="Video Übersicht"
          src="/assets/video/monocure.mp4"
          muted
          autoPlay
          preload="none"
          loop
          controls
          playsInline
          style={{
            width: "100%",
            maxWidth: "100%",
            objectFit: "cover",
          }}
        />
      </AspectRatio>
    </Box>
  );
};


