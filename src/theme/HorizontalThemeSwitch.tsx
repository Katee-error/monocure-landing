import { useColorMode } from '@chakra-ui/react';

import { HorizontalThemeSwitchStack } from 'components/theme/HorizontalThemeSwitchStack';
import useColorModeChecker from 'components/theme/isLightTheme';
import { ThemeSwitchButton } from 'components/theme/ThemeSwitchButton';

export function HorizontalThemeSwitch() {
  const { setColorMode } = useColorMode();
  const isLight = useColorModeChecker();

  return (
    <HorizontalThemeSwitchStack>
      <ThemeSwitchButton
        mode={'light'}
        isLight={isLight}
        setColorMode={setColorMode}
      />
      <ThemeSwitchButton
        mode={'dark'}
        isLight={isLight}
        setColorMode={setColorMode}
      />
    </HorizontalThemeSwitchStack>
  );
}
