import { defineStyleConfig } from '@chakra-ui/react';

export const Table = defineStyleConfig({
  baseStyle: {
    table: {
      borderWidth: '1px',
      borderRadius: '4',
      borderColor: 'transparent',
      borderStyle: 'hidden' /* hide standard table (collapsed) border */,
      overflow: 'hidden',
      boxShadow:
        '0 0 0 1px var(--chakra-colors-grey-border)' /* this draws the table border  */,
    },

    thead: {
      fontSize: 'sm',
      borderTopRadius: '4',
      background: 'grey.offWhite',

      th: {
        borderColor: 'transparent',
        color: 'grey.tertiaryText',
        fontWeight: '500',
      },
    },

    td: {
      borderColor: 'transparent',
      '&[data-is-numeric=true]': {
        fontFamily: 'var(--font-numeric)',
      },
    },

    tbody: {
      borderColor: 'transparent',

      td: { borderColor: 'transparent' },
      color: 'grey.secondaryText',
    },

    tfoot: {
      background: 'grey.offWhite',
      td: {
        paddingY: '2',
      },
    },
  },

  variants: {
    hasError: {
      thead: {
        th: {
          bg: 'grey.offWhite',
          color: 'grey.tertiaryText',
        },
      },

      td: {
        bg: 'grey.offWhite',
        color: 'grey.tertiaryText',
      },
    },

    plain: {
      borderWidth: '0px',
      thead: {
        background: 'transparent',
        th: {
          color: 'grey.tertiaryText',
        },
      },

      td: {
        color: 'grey.tertiaryText',
      },
    },
  },
});
