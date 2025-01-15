export const Textarea = {
  baseStyle: {},
  defaultProps: {
    size: 'md',
  },
  sizes: {
    md: {
      fontSize: 'md',
      height: '128px',
    },
  },
  variants: {
    outline: {
      _focus: {
        borderWidth: '1px',
        borderColor: 'blue.400',
        boxShadow: 'focus',
      },
    },
    success: {
      borderWidth: '1px',
      borderColor: 'green.500',
      boxShadow: 'success',
      _focus: {
        borderWidth: '1px',
        borderColor: 'green.500',
        boxShadow: 'success',
      },
    },
    error: {
      borderWidth: '1px',
      borderColor: 'error.button',
      boxShadow: 'error',
      _focus: {
        borderWidth: '1px',
        borderColor: 'error.button',
        boxShadow: 'error',
      },
    },
    disabled: {
      borderColor: 'grey.background',
      borderWidth: '1px',
      pointerEvents: 'none',
      background: 'grey.background',
      color: 'grey.tertiaryText',
    },
  },
};
