"use client";
import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { borderRadius } from "./borderRadius";
import { colors, semanticColors } from "./colors";
import { Badge } from "./components/Badge.theme";
import { Heading } from "./components/Heading.theme";
import { Text } from "./components/Text.theme";
import { font } from "./font";
import { shadows } from "./shadows";
import { space } from "./space";
import { zIndices } from "./zIndices";
import { container } from "./containers";
import { brakepoint } from "./brakepoints";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: config.initialColorMode }),
  {
    config,
    styles: {
      global: {
        body: {
          bg: "white",
          color: "gray.primaryText.light",
        },
      },
      colors: {
        accent: "#0F89D3",
        main: "#fff",
        primaryText: "#252525",
        secondaryText: "",
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
      Text,
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
  }
);
