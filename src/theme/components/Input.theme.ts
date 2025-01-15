export const Input = {
  baseStyle: {},
  defaultProps: {
    size: 'md',
  },
  sizes: {
    md: {
      field: {
        paddingInlineEnd: 'min(48px, 20%)',
        borderRadius: '6px',
        height: '48px',
        fontSize: 'md',
      },
    },
  },
  variants: {
    outline: {
      field: {
        _focus: {
          borderWidth: '1px',
          borderColor: 'blue.400',
          boxShadow: 'focus',
        },
      },
    },
    success: {
      field: {
        borderWidth: '1px',
        borderColor: 'green.500',
        boxShadow: 'success',
        _focus: {
          borderWidth: '1px',
          borderColor: 'green.500',
          boxShadow: 'success',
        },
      },
    },
    error: {
      field: {
        borderWidth: '1px',
        borderColor: 'error.button',
        boxShadow: 'error',

        _focus: {
          borderWidth: '1px',
          borderColor: 'error.button',
          boxShadow: 'error',
        },
      },
    },
    disabled: {
      field: {
        borderColor: 'grey.background',
        pointerEvents: 'none',
        background: 'grey.background',
        color: 'grey.tertiaryText',
      },
    },
    ghost: {
      field: {
        backgroundColor: 'grey.white',
      },
    },
  },
};
