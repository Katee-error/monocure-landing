'use client'
import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from '@chakra-ui/react';

import { borderRadius } from './borderRadius';
import { colors, semanticColors } from './colors';
import { Badge } from './components/Badge.theme';
import { Button } from './components/Button.theme';
import { Checkbox } from './components/Checkbox.theme';
import { Heading } from './components/Heading.theme';
import { Input } from './components/Input.theme';
import { Modal } from './components/Modal.theme';
import { Radio } from './components/Radio.theme';
import { Table } from './components/Table.theme';
import { Tabs } from './components/Tabs.theme';
import { Tag } from './components/Tag.theme';
import { Text } from './components/Text.theme';
import { Textarea } from './components/Textarea.theme';
import { font } from './font';
import { shadows } from './shadows';
import { space } from './space';
import { zIndices } from './zIndices';
import { container } from './containers';
import { brakepoint } from './brakepoints';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: config.initialColorMode }),
  {
    config,
    styles: {
      global: {
        body: {
          bg: 'white',
          color: 'gray.primaryText.light'
        },
      },
    },
  },
  {
    borderRadius,
   brakepoint,
    container,
    colors,
    components: {
      Badge,
      Heading,
      Tabs,
      Button,
      Input,
      Text,
      Textarea,
      Table,
      Tag,
      Modal,
      Radio,
      Checkbox,
    },
    ...font,
    shadows,
    space,
    zIndices,
  },
  {
    semanticTokens: {
      colors: semanticColors,
    },
  },
);
