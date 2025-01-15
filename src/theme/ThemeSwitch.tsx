import { ColorMode } from '@chakra-ui/color-mode';
import { LinkBox, useColorMode } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import useColorModeChecker from 'components/theme/isLightTheme';
import { HStack, MoonIcon, SunIcon, Text } from 'components/uikit';

interface ThemeSwitchButtonProps {
  mode: ColorMode;
}

function ThemeSwitchButton({ mode }: ThemeSwitchButtonProps) {
  const { t } = useTranslation('sidebar');
  const { setColorMode } = useColorMode();
  const isLight = useColorModeChecker();
  const isMode = mode === 'light' ? isLight : !isLight;
  const Icon = mode === 'light' ? SunIcon : MoonIcon;
  const tooltipText =
    mode === 'light'
      ? t('theme_toggle_light_mode')
      : t('theme_toggle_dark_mode');

  const handleClick = () => {
    setColorMode(mode);
  };

  return (
    <LinkBox as='button' width='100%' onClick={handleClick}>
      <HStack
        height='100%'
        padding='5px 8px'
        borderRadius='2px'
        direction='row'
        justify='center'
        align='center'
        flex='1'
        background={isMode ? 'secondary.background.dark' : 'transparent'}
        _hover={{
          background: isMode ? 'secondary.button.light' : 'grey.offWhite.dark',
        }}
      >
        <Icon
          stroke={isMode ? 'secondary.text.dark' : 'grey.secondaryText.dark'}
          _hover={{
            stroke: 'secondary.text.dark',
          }}
          height='16px'
          width='16px'
        />
        <Text
          color={isMode ? 'secondary.text.dark' : 'grey.secondaryText.dark'}
          _hover={{
            color: 'secondary.text.dark',
          }}
          fontSize='12px'
          fontWeight='500'
          lineHeight='150%'
        >
          {tooltipText}
        </Text>
      </HStack>
    </LinkBox>
  );
}

export default function ThemeSwitch() {
  return (
    <HStack
      marginTop='auto'
      alignItems='center'
      padding='4px'
      minHeight='40px'
      borderRadius='4px'
      overflow='hidden'
      borderColor='grey.border.dark'
      borderWidth='1px'
      spacing='4px'
      width='152px'
      bgColor='grey.background.dark'
    >
      <ThemeSwitchButton mode='light' />
      <ThemeSwitchButton mode='dark' />
    </HStack>
  );
}
