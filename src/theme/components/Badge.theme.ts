import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const baseStyle = defineStyle((styleProps) => {
  return {
    badge: {},
    borderRadius: '16px',
    padding: '2px 8px',
    height: '20px',
    lineHeight: '16px',
    textTransform: 'none',
    fontWeight: 'medium',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: `${styleProps.colorScheme}.background`,
    color: `${styleProps.colorScheme}.text`,
    stroke: `${styleProps.colorScheme}.text`,
  };
});

export const Badge = defineStyleConfig({
  defaultProps: {
    variant: 'default',
  },
  baseStyle,
  variants: {
    default: {},
    gray: {
      backgroundColor: 'grey.background',
      color: 'grey.tertiaryText',
      stroke: 'grey.tertiaryText',
    },
  },
});
