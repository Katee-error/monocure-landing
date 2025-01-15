import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const insightFocusStyle = definePartsStyle({
  track: {
    _checked: {
      backgroundColor: 'dataViz.1',
    },
  },
  thumb: {
    bg: 'grey.white',
  },
});

const defaultStyle = definePartsStyle({
  track: {
    _checked: {
      backgroundColor: 'primary.button',
    },
  },
  thumb: {
    bg: 'grey.white',
  },
});

const darkModeToggleStyle = definePartsStyle({
  track: {
    _checked: {
      backgroundColor: 'warning.button',
    },
    backgroundColor: '#B4BAC3',
  },
  thumb: {
    backgroundColor: 'white',
  },
});

export const Switch = defineMultiStyleConfig({
  variants: {
    insightFocus: insightFocusStyle,
    darkModeToggle: darkModeToggleStyle,
    default: defaultStyle,
  },
});
