import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const roundedStyle = definePartsStyle({
  container: {
    borderRadius: '12px',
    p: '2px 8px',
  },
});

const squareStyle = definePartsStyle({
  container: {
    borderRadius: '2px',
  },
});

const baseStyle = definePartsStyle((styleProps) => {
  const bgValue = styleProps.colorMode === 'light' ? 100 : 700;
  const colorValue = styleProps.colorMode === 'light' ? 700 : 100;
  return {
    container: {
      backgroundColor: `${styleProps.colorScheme}.${bgValue}`,
      color: `${styleProps.colorScheme}.${colorValue}`,
      stroke: `${styleProps.colorScheme}.${colorValue}`,
      fill: `${styleProps.colorScheme}.${colorValue}`,
    },
  };
});

export const Tag = defineMultiStyleConfig({
  defaultProps: {
    variant: 'rounded',
  },
  baseStyle,
  variants: {
    rounded: roundedStyle,
    square: squareStyle,
  },
});
