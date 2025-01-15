import { defineStyle } from '@chakra-ui/react';

export const Modal = defineStyle({
  baseStyle: {
    dialog: {
      border: '1px solid',
      borderColor: 'grey.border',
    },
    closeButton: {
      top: '24px',
      right: '24px',
    },
    header: {
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: 'grey.border',
      py: '6',
      px: '6',
    },
    body: {
      p: '6',
    },
    footer: {
      borderTopWidth: '1px',
      borderTopStyle: 'solid',
      borderTopColor: 'grey.border',
    },
  },
});
