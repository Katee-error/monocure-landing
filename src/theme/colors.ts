const withDefault = (
  colors: Record<
    25 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    string
  >,
) => {
  return {
    ...colors,
    default: colors[500],
  };
};

const rawColors = {
  cyan: withDefault({
    25: '#CFFAFE',
    50: '#CFFAFE',
    100: '#CFFAFE',
    200: '#0E7490',
    300: '#0E7490',
    400: '#0E7490',
    500: '#0E7490',
    600: '#0E7490',
    700: '#0E7490',
    800: '#0E7490',
    900: '#0E7490',
  }),
  blueGray: withDefault({
    25: '#FCFCFD',
    50: '#F8F9FC',
    100: '#EAECF5',
    200: '#EAECF5',
    300: '#EAECF5',
    400: '#717BBC',
    500: '#4E5BA6',
    600: '#3E4784',
    700: '#363F72',
    800: '#293056',
    900: '#101323',
  }),
  blueLight: withDefault({
    25: '#F5FBFF',
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#B9E6FE',
    300: '#7CD4FD',
    400: '#36BFFA',
    500: '#0BA5EC',
    600: '#0086C9',
    700: '#026AA2',
    800: '#065986',
    900: '#0B4A6F',
  }),
  blue: withDefault({
    25: '#F5FAFF',
    50: '#EFF8FF',
    100: '#E5F3FF',
    200: '#B2DDFF',
    300: '#84CAFF',
    400: '#53B1FD',
    500: '#2E90FA',
    600: '#1570EF',
    700: '#175CD3',
    800: '#1849A9',
    900: '#194185',
  }),
  indigo: withDefault({
    25: '#F5F8FF',
    50: '#EEF4FF',
    100: '#E0EAFF',
    200: '#C7D7FE',
    300: '#A4BCFD',
    400: '#8098F9',
    500: '#6172F3',
    600: '#444CE7',
    700: '#3538CD',
    800: '#2D31A6',
    900: '#2D3282',
  }),
  purple: withDefault({
    25: '#FAFAFF',
    50: '#F4F3FF',
    100: '#EBE9FE',
    200: '#D9D6FE',
    300: '#BDB4FE',
    400: '#9B8AFB',
    500: '#7A5AF8',
    600: '#6938EF',
    700: '#5925DC',
    800: '#4A1FB8',
    900: '#3E1C96',
  }),
  pink: withDefault({
    25: '#FEF6FB',
    50: '#FDF2FA',
    100: '#FCE7F6',
    200: '#FCCEEE',
    300: '#FAA7E0',
    400: '#F670C7',
    500: '#EE46BC',
    600: '#DD2590',
    700: '#C11574',
    800: '#9E165F',
    900: '#851651',
  }),
  rose: withDefault({
    25: '#FFF5F6',
    50: '#FFF1F3',
    100: '#FFE4E8',
    200: '#FECDD6',
    300: '#FEA3B4',
    400: '#FD6F8E',
    500: '#F63D68',
    600: '#E31B54',
    700: '#C01048',
    800: '#A11043',
    900: '#89123E',
  }),
  orange: withDefault({
    25: '#FFFAF5',
    50: '#FFF6ED',
    100: '#FFEAD5',
    200: '#FDDCAB',
    300: '#FEB273',
    400: '#FD853A',
    500: '#FB6514',
    600: '#EC4A0A',
    700: '#C4320A',
    800: '#9C2A10',
    900: '#7E2410',
  }),
  red: withDefault({
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
  }),
  yellow: withDefault({
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
  }),
  green: withDefault({
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#D1FADF',
    200: '#A6F4C5',
    300: '#6CE9A6',
    400: '#32D583',
    500: '#12B76A',
    600: '#039855',
    700: '#027A48',
    800: '#05603A',
    900: '#054F31',
  }),
  violet: withDefault({
    25: '#FCFAFF',
    50: '#F9F5FF',
    100: '#F4EBFF',
    200: '#E9D7FE',
    300: '#D6BBFB',
    400: '#B692F6',
    500: '#9E77ED',
    600: '#7F56D9',
    700: '#6941C6',
    800: '#53389E',
    900: '#42307D',
  }),
  teal: withDefault({
    25: '#F6FEFC',
    50: '#F0FDFA',
    100: '#CCFBF1',
    200: '#99F6E4',
    300: '#5EEAD4',
    400: '#2DD4BF',
    500: '#14B8A6',
    600: '#0D9488',
    700: '#0F766E',
    800: '#115E59',
    900: '#134E4A',
  }),
};

const namedColors = {
  grey: {
    background: {
      light: '#EEF2F6',
      dark: '#090D13',
    },
    overlay: {
      light: '#697586E5',
      dark: '#697586E6',
    },
    white: {
      light: '#FFFFFF',
      dark: '#121926',
    },
    offWhite: {
      light: '#F8FAFC',
      dark: '#242D3C',
    },
    border: {
      light: '#E3E8EF',
      dark: '#364152',
    },
    tertiaryText50: {
      light: '#69758680',
      dark: '#848A9380',
    },
    tertiaryText: {
      light: '#697586',
      dark: '#848A93',
    },
    secondaryText: {
      light: '#364152',
      dark: '#B4BAC3',
    },
    primaryText: {
      light: '#121926',
      dark: '#F8FAFC',
    },
  },
  primary: {
    background: {
      light: rawColors.green[100],
      dark: rawColors.green[700],
    },
    button: {
      light: rawColors.green[600],
      dark: rawColors.green[400],
    },
    text: {
      light: rawColors.green[700],
      dark: rawColors.green[100],
    },
  },
  secondary: {
    background: {
      light: rawColors.blue[100],
      dark: rawColors.blue[700],
    },
    button: {
      light: rawColors.blue[600],
      dark: rawColors.blue[400],
    },
    text: {
      light: rawColors.blue[700],
      dark: rawColors.blue[100],
    },
  },
  tertiary: {
    background: {
      light: rawColors.purple[100],
      dark: rawColors.purple[700],
    },
    button: {
      light: rawColors.purple[600],
      dark: rawColors.purple[400],
    },
    text: {
      light: rawColors.purple[700],
      dark: rawColors.purple[100],
    },
  },
  warning: {
    background: {
      light: rawColors.yellow[100],
      dark: rawColors.yellow[700],
    },
    button: {
      light: rawColors.yellow[600],
      dark: rawColors.yellow[400],
    },
    text: {
      light: rawColors.yellow[700],
      dark: rawColors.yellow[100],
    },
  },
  error: {
    background: {
      light: rawColors.red[100],
      dark: rawColors.red[700],
    },
    button: {
      light: rawColors.red[600],
      dark: rawColors.red[400],
    },
    text: {
      light: rawColors.red[700],
      dark: rawColors.red[100],
    },
  },
  orange: {
    background: {
      light: rawColors.orange[100],
      dark: rawColors.orange[700],
    },
    text: {
      light: rawColors.orange[700],
      dark: rawColors.orange[100],
    },
  },
  cyan: {
    background: {
      light: rawColors.cyan[100],
      dark: rawColors.cyan[700],
    },
    text: {
      light: rawColors.cyan[700],
      dark: rawColors.cyan[100],
    },
  },
  teal: {
    background: {
      light: rawColors.teal[100],
      dark: rawColors.teal[700],
    },
    text: {
      light: rawColors.teal[700],
      dark: rawColors.teal[100],
    },
  },
  dataViz: {
    1: {
      light: rawColors.blueLight[500],
      dark: rawColors.blueLight[600],
    },
    2: {
      light: rawColors.teal[300],
      dark: rawColors.teal[500],
    },
    3: {
      light: rawColors.indigo[600],
      dark: rawColors.purple[700],
    },
    4: {
      light: rawColors.red[500],
      dark: rawColors.red[700],
    },
    5: {
      light: rawColors.yellow[300],
      dark: rawColors.yellow[500],
    },
    6: {
      light: '#98A2B3',
      dark: '#697586',
    },
    7: {
      light: rawColors.blueLight[200],
      dark: rawColors.blueLight[900],
    },
    8: {
      light: rawColors.blueLight[300],
      dark: rawColors.blueLight[800],
    },
    9: {
      light: rawColors.blueLight[500],
      dark: rawColors.blueLight[600],
    },
    10: {
      light: rawColors.blueLight[700],
      dark: rawColors.blueLight[400],
    },
    11: {
      light: '#C0E5D4',
      dark: '#32D58340',
    },
    12: {
      light: '#81CBAA',
      dark: '#32D58380',
    },
    13: {
      light: '#42B27F',
      dark: '#32D583C0',
    },
    14: {
      light: rawColors.green[600],
      dark: rawColors.green[400],
    },
    Positive: {
      light: rawColors.green[500],
      dark: rawColors.green[400],
    },
    PositiveBg: {
      light: rawColors.green[200],
      dark: rawColors.green[200],
    },
    Negative: {
      light: rawColors.yellow[500],
      dark: rawColors.yellow[400],
    },
    NegativeBg: {
      light: rawColors.yellow[200],
      dark: rawColors.yellow[200],
    },
  },
};

export type Colors = typeof colors;

export const colors = {
  ...rawColors,
  ...namedColors,
  cohortBlue: rawColors.blueLight,
  positiveSentiment: rawColors.green[700],
  negativeSentiment: rawColors.red[700],
};

export const semanticColors = {
  'grey.background': {
    default: namedColors.grey.background.light,
    _dark: namedColors.grey.background.dark,
  },
  'grey.white': {
    default: namedColors.grey.white.light,
    _dark: namedColors.grey.white.dark,
  },
  'grey.offWhite': {
    default: namedColors.grey.offWhite.light,
    _dark: namedColors.grey.offWhite.dark,
  },
  'grey.border': {
    default: namedColors.grey.border.light,
    _dark: namedColors.grey.border.dark,
  },
  'grey.primaryText': {
    default: namedColors.grey.primaryText.light,
    _dark: namedColors.grey.primaryText.dark,
  },
  'grey.secondaryText': {
    default: namedColors.grey.secondaryText.light,
    _dark: namedColors.grey.secondaryText.dark,
  },
  'grey.tertiaryText': {
    default: namedColors.grey.tertiaryText.light,
    _dark: namedColors.grey.tertiaryText.dark,
  },
  'grey.tertiaryText50': {
    default: namedColors.grey.tertiaryText50.light,
    _dark: namedColors.grey.tertiaryText50.dark,
  },
  'primary.background': {
    default: namedColors.primary.background.light,
    _dark: namedColors.primary.background.dark,
  },
  'primary.button': {
    default: namedColors.primary.button.light,
    _dark: namedColors.primary.button.dark,
  },
  'primary.text': {
    default: namedColors.primary.text.light,
    _dark: namedColors.primary.text.dark,
  },
  'secondary.background': {
    default: namedColors.secondary.background.light,
    _dark: namedColors.secondary.background.dark,
  },
  'secondary.button': {
    default: namedColors.secondary.button.light,
    _dark: namedColors.secondary.button.dark,
  },
  'secondary.text': {
    default: namedColors.secondary.text.light,
    _dark: namedColors.secondary.text.dark,
  },
  'tertiary.background': {
    default: namedColors.tertiary.background.light,
    _dark: namedColors.tertiary.background.dark,
  },
  'tertiary.button': {
    default: namedColors.tertiary.button.light,
    _dark: namedColors.tertiary.button.dark,
  },
  'tertiary.text': {
    default: namedColors.tertiary.text.light,
    _dark: namedColors.tertiary.text.dark,
  },
  'warning.background': {
    default: namedColors.warning.background.light,
    _dark: namedColors.warning.background.dark,
  },
  'warning.button': {
    default: namedColors.warning.button.light,
    _dark: namedColors.warning.button.dark,
  },
  'warning.text': {
    default: namedColors.warning.text.light,
    _dark: namedColors.warning.text.dark,
  },
  'error.background': {
    default: namedColors.error.background.light,
    _dark: namedColors.error.background.dark,
  },
  'error.button': {
    default: namedColors.error.button.light,
    _dark: namedColors.error.button.dark,
  },
  'error.text': {
    default: namedColors.error.text.light,
    _dark: namedColors.error.text.dark,
  },
  'orange.background': {
    default: namedColors.orange.background.light,
    _dark: namedColors.orange.background.dark,
  },
  'orange.text': {
    default: namedColors.orange.text.light,
    _dark: namedColors.orange.text.dark,
  },
  'cyan.background': {
    default: namedColors.cyan.background.light,
    _dark: namedColors.cyan.background.dark,
  },
  'cyan.text': {
    default: namedColors.cyan.text.light,
    _dark: namedColors.cyan.text.dark,
  },
  'teal.background': {
    default: namedColors.teal.background.light,
    _dark: namedColors.teal.background.dark,
  },
  'teal.text': {
    default: namedColors.teal.text.light,
    _dark: namedColors.teal.text.dark,
  },
  'dataViz.1': {
    default: namedColors.dataViz[1].light,
    _dark: namedColors.dataViz[1].dark,
  },
  'dataViz.2': {
    default: namedColors.dataViz[2].light,
    _dark: namedColors.dataViz[2].dark,
  },
  'dataViz.3': {
    default: namedColors.dataViz[3].light,
    _dark: namedColors.dataViz[3].dark,
  },
  'dataViz.4': {
    default: namedColors.dataViz[4].light,
    _dark: namedColors.dataViz[4].dark,
  },
  'dataViz.5': {
    default: namedColors.dataViz[5].light,
    _dark: namedColors.dataViz[5].dark,
  },
  'dataViz.6': {
    default: namedColors.dataViz[6].light,
    _dark: namedColors.dataViz[6].dark,
  },
  'dataViz.7': {
    default: namedColors.dataViz[7].light,
    _dark: namedColors.dataViz[7].dark,
  },
  'dataViz.8': {
    default: namedColors.dataViz[8].light,
    _dark: namedColors.dataViz[8].dark,
  },
  'dataViz.9': {
    default: namedColors.dataViz[9].light,
    _dark: namedColors.dataViz[9].dark,
  },
  'dataViz.10': {
    default: namedColors.dataViz[10].light,
    _dark: namedColors.dataViz[10].dark,
  },
  'dataViz.11': {
    default: namedColors.dataViz[11].light,
    _dark: namedColors.dataViz[11].dark,
  },
  'dataViz.12': {
    default: namedColors.dataViz[12].light,
    _dark: namedColors.dataViz[12].dark,
  },
  'dataViz.13': {
    default: namedColors.dataViz[13].light,
    _dark: namedColors.dataViz[13].dark,
  },
  'dataViz.14': {
    default: namedColors.dataViz[14].light,
    _dark: namedColors.dataViz[14].dark,
  },
  'dataViz.Positive': {
    default: namedColors.dataViz.Positive.light,
    _dark: namedColors.dataViz.Positive.dark,
  },
  'dataViz.PositiveBg': {
    default: namedColors.dataViz.PositiveBg.light,
    _dark: namedColors.dataViz.PositiveBg.dark,
  },
  'dataViz.Negative': {
    default: namedColors.dataViz.Negative.light,
    _dark: namedColors.dataViz.Negative.dark,
  },
  'dataViz.NegativeBg': {
    default: namedColors.dataViz.NegativeBg.light,
    _dark: namedColors.dataViz.NegativeBg.dark,
  },
  'dataViz.NeutralDriver': {
    default: namedColors.dataViz[1].dark,
    _dark: namedColors.dataViz[1].light,
  },
  'dataViz.PositiveDriver': {
    default: namedColors.dataViz.Positive.dark,
    _dark: namedColors.dataViz.Positive.light,
  },
  'dataViz.NegativeDriver': {
    default: namedColors.dataViz.Negative.dark,
    _dark: namedColors.dataViz.Negative.light,
  },
};

export const dialogGradientLight = `linear-gradient(63deg, #F8FAFC 0%, #B4BAC3 100%);`;
export const dialogGradientDark = `linear-gradient(63deg, #101828 0%, #344054 100%)`;

export const radarMobileGradientLight = `linear-gradient(180deg, rgba(238, 242, 246, 1) 0%,rgba(238, 242, 246, 0.7) 70%, rgba(238, 242, 246, 0) 100%)`;
export const radarMobileGradientDark = `linear-gradient(180deg, rgba(9, 13, 19, 1) 0%,rgba(9, 13, 19, 0.7) 70%, rgba(9, 13, 19, 0) 100%)`;
