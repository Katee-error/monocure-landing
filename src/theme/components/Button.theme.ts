import { StyleFunctionProps } from '@chakra-ui/react';

export const Button = {
  defaultProps: {
    variant: 'primary',
    size: 'md',
  },
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: '4',
    _disabled: {
      pointerEvents: 'none',
      backgroundColor: 'grey.offWhite',
      color: 'grey.tertiaryText',
      border: '2px',
      borderColor: 'grey.background',
    },
    _focus: {
      ring: 4,
      ringColor: 'blue.100',
    },
  },
  sizes: {
    xs: {
      borderRadius: '2px',
    },
    sm: {
      h: '32px',
      fontSize: 'sm',
      px: '16px',
      py: '6px',
    },
    md: {
      h: '40px',
      fontSize: 'md',
      px: '18px',
      py: '8px',
    },
    lg: {
      h: '46px',
      fontSize: 'lg',
      px: '24px',
      py: '12px',
    },
  },
  variants: {
    primary: {
      backgroundColor: 'primary.button',
      color: 'grey.white',
      _hover: {
        backgroundColor: 'primary.text',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    secondary: {
      backgroundColor: 'secondary.button',
      color: 'grey.white',
      _hover: {
        backgroundColor: 'secondary.text',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    tertiary: {
      backgroundColor: 'tertiary.button',
      color: 'grey.white',
      _hover: {
        backgroundColor: 'tertiary.text',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    grey: {
      backgroundColor: 'grey.border',
      color: 'grey.tertiaryText',
      '&:hover, &:focus, &._hover, &._focus': {
        outline: 'none',
        boxShadow: 'none',
      },
    },
    primaryGhost: (styleProps: StyleFunctionProps) => {
      const hoverBackgroundValue =
        styleProps.colorMode === 'light'
          ? 'secondary.background'
          : 'grey.border';
      return {
        backgroundColor: 'none',
        color: 'secondary.button',
        _hover: {
          backgroundColor: hoverBackgroundValue,
        },
        _disabled: {
          backgroundColor: 'none',
          border: '0',
          color: 'grey.tertiaryText',
        },
        _focus: {
          ring: 0,
          outline: 'none',
          tabIndex: -1,
        },
        _active: {
          backgroundColor: 'secondary.background',
          color: 'secondary.text',
        },
      };
    },
    secondaryGhost: {
      fontWeight: 'medium',
      fontSize: '14px',
      backgroundColor: 'none',
      color: 'grey.tertiaryText',
      _hover: {
        color: 'secondary.text',
        backgroundColor: 'secondary.background',
      },
      _disabled: {
        backgroundColor: 'none',
        border: '0',
        color: 'grey.tertiaryText',
      },
      _active: {
        backgroundColor: 'secondary.background',
        color: 'secondary.text',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    errorGhost: {
      backgroundColor: 'none',
      color: 'red.600',
      _hover: {
        backgroundColor: 'red.50',
      },
      _disabled: {
        backgroundColor: 'none',
        color: 'grey.border',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    grayGhost: {
      backgroundColor: 'none',
      color: 'grey.tertiaryText',
      _hover: {
        backgroundColor: 'grey.background',
        color: 'grey.secondaryText',
        svg: {
          stroke: 'grey.secondaryText',
        },
      },
      _disabled: {
        backgroundColor: 'none',
        color: 'grey.tertiaryText',
      },
    },
    grayOutline: {
      border: '1px solid',
      borderColor: 'grey.border',
      backgroundColor: 'none',
      color: 'grey.secondaryText',
      _hover: {
        backgroundColor: 'grey.background',
      },
      _disabled: {
        backgroundColor: 'none',
        color: 'grey.tertiaryText',
      },
    },
    onboarding: {
      backgroundColor: 'green.400',
      color: 'grey.white',
      _hover: {
        backgroundColor: 'green.700',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    lightBlue: {
      backgroundColor: 'blue.700',
      color: 'white',
      _hover: {
        backgroundColor: 'blue.600',
      },
      _focus: {
        ring: 0,
        outline: 'none',
        tabIndex: -1,
      },
    },
    lightBlueGhost: (styleProps: StyleFunctionProps) => {
      return {
        backgroundColor:
          styleProps.colorMode === 'light' ? 'blue.100' : 'blue.700',
        color: styleProps.colorMode === 'light' ? 'blue.700' : 'blue.100',
      };
    },
  },
};
