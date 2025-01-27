'use client'
import {Flex, useMediaQuery } from "@chakra-ui/react";

export const VideoReview = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex
      justifyContent="center"
      bg="white"
      mb="40px"
      borderRadius="20px"
      p={4}
      textAlign="center"
      mt={8}
    >
      {isMobile ? (
        <iframe
          width="100%"
          height="auto"
          style={{
            aspectRatio: "16/9",
            borderRadius: "20px",
          }}
          src="https://www.youtube.com/embed/JM2DIgF8Cug?playlist=JM2DIgF8Cug&autoplay=1&loop=1&mute=1&modestbranding=1&controls=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      ) : (
        <iframe
          width="80%"
          height="auto"
          style={{
            aspectRatio: "16/9",
            borderRadius: "20px",
          }}
          src="https://www.youtube.com/embed/JM2DIgF8Cug?playlist=JM2DIgF8Cug&autoplay=1&loop=1&mute=1&modestbranding=1&controls=1"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}
    </Flex>
  );
};
