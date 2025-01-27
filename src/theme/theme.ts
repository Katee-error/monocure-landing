"use client";
import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const semanticColors = {
  primaryText: "#fafafa",
  secondaryText: "rgba(255, 255, 255, 0.6)",
  headingSecondaryText: "rgba(255, 255, 255, 0.7)",
  background: "white",
  accent: "#0F89D3",
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: config.initialColorMode }),
  {
    styles: {
      global: {
        body: {
          backgroundColor: "background",
          height: "100vh",
        },
      },
    },
    colors: {
      ...semanticColors,
    },
    components: {
      Badge: {
        baseStyle: {
          color:"primaryText",
          bgColor:"accent",
          padding:"5px 10px",
          mb:"20px",
          borderRadius: 'full',
          fontWeight: 600,
          fontSize: '14px'
        }
      }
    }
  }
);
