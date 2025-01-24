'use client'
import { Box, AspectRatio, Heading } from "@chakra-ui/react";
import { useState } from "react";

const VideoReview = () => {
  const [controlsVisible, setControlsVisible] = useState(false);

  const handleVideoClick = () => {
    setControlsVisible(true); // Показываем элементы управления при клике
  };

  return (
    <Box bg="white" mb="40px" borderRadius="md" p={4} textAlign="center" mt={8}>
      <Heading textAlign="center" mb={["20px", "40px"]}>
        Video Übersicht
      </Heading>
      <AspectRatio ratio={16 / 9} maxW={['100%', '80%']} mx="auto">
        <video
          title="Video Übersicht"
          src="/assets/video/monocure.mp4"
          muted
          autoPlay
          loop
          controls={controlsVisible} // Показываем элементы управления, если кликнули
          onClick={handleVideoClick} // При клике показываем элементы управления
          style={{
            width: '100%',
            maxWidth: '100%',
            objectFit: 'cover',
          }}
        />
      </AspectRatio>
    </Box>
  );
};

export default VideoReview;

