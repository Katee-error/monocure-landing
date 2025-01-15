export const Tabs = {
  baseStyle: {
    tablist: {
      width: '100%',
      height: '100%',
      borderBottomWidth: '0 !important',
      borderBottomStyle: 'none',
      borderBottomColor: 'transparent',
    },
    tab: {
      paddingLeft: '12px',
      paddingRight: '12px',
      fontWeight: '600',
      color: 'grey.tertiaryText',

      _selected: {
        borderBottomWidth: '3px',
        color: 'secondary.button',
      },
    },
    tabpanel: {
      padding: '0',
    },
  },
};
