import { defineStyle } from '@chakra-ui/react';

import { shadows } from '../shadows';

export const Radio = defineStyle({
  baseStyle: {
    control: {
      height: '20px',
      width: '20px',
      borderWidth: '1px',
      mt: '2px',
      alignSelf: 'flex-start',
      _checked: {
        color: 'blue.600',
        backgroundColor: 'blue.50 !important',
      },
      _hover: {
        boxShadow: shadows.focus,
      },
      _focus: {
        boxShadow: shadows.focus,
      },
      _focusVisible: {
        boxShadow: shadows.focus,
      },
      _before: {
        height: '8px!important',
        width: '8px!important',
      },
    },
    label: {
      fontSize: 'md',
      fontWeight: 'medium',
      lineHeight: '20px',
    },
  },
  defaultProps: {
    colorScheme: 'primary',
    size: null,
  },
});
