import { Box, Text } from "@chakra-ui/react";

export const HighlightedText = () => {
  return (
    <Box position="relative" display="inline-block">
      {/* Основной текст */}
      <Text
        fontSize="7xl"
        fontWeight="bold"
        zIndex={1}
        position="relative"
        px={4} // Отступы вокруг текста для размера обводки
        color="#3489C8"
      >
       Monocure
      </Text>

      {/* SVG для овальной обводки */}
      <Box
        as="svg"
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        pointerEvents="none"
        overflow="visible"
      >
        <rect
          x="0"
          y="0"
          rx="50" /* Радиус углов для создания овала */
          ry="50"
          width="100%"
          height="100%"
          fill="none"
          stroke="#0F89D3" /* Цвет обводки */
          strokeWidth="3"
        />
      </Box>
    </Box>
  );
};

