import { defineStyle } from '@chakra-ui/react';

import { shadows } from '../shadows';

export const Checkbox = defineStyle({
  baseStyle: {
    control: {
      height: '20px',
      width: '20px',
      borderWidth: '1px',
      mt: '2px',
      alignSelf: 'flex-start',
      borderRadius: '4px',
      _checked: {
        borderColor: 'blue.600',
        color: 'blue.600',
        backgroundColor: 'blue.50 !important',
        _hover: {
          borderColor: 'blue.600',
        },
      },
      _indeterminate: {
        borderColor: 'blue.600',
        color: 'blue.600',
        backgroundColor: 'blue.50 !important',
        _hover: {
          borderColor: 'blue.600',
        },
      },
      _hover: {
        borderColor: 'blue.600',
        boxShadow: shadows.focus,
      },
      _focus: {
        borderColor: 'blue.600',
        boxShadow: shadows.focus,
      },
      _focusVisible: {
        borderColor: 'blue.600',
        boxShadow: shadows.focus,
      },
    },
    label: {
      fontSize: 'md',
      fontWeight: 'medium',
      lineHeight: '20px',
    },
  },

  variants: {
    noShadow: {
      control: {
        _checked: {
          _focus: {
            borderColor: 'blue.600',
          },
        },
        _indeterminate: {
          _focus: {
            borderColor: 'blue.600',
          },
        },
        _hover: {
          borderColor: 'grey.border',
          boxShadow: 'none',
        },
        _focus: {
          borderColor: 'grey.border',
          boxShadow: 'none',
        },
        _focusVisible: {
          borderColor: 'grey.border',
          boxShadow: 'none',
        },
      },
    },
  },
  defaultProps: {
    colorScheme: 'blue',
    size: null,
  },
});
