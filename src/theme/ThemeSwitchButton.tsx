import { ColorMode } from '@chakra-ui/color-mode';
import { LinkBox } from '@chakra-ui/react';

import { MoonIcon, Stack, SunIcon } from 'components/uikit';

export function ThemeSwitchButton({
  mode,
  isLight,
  setColorMode,
  disabled,
}: {
  mode: ColorMode;
  isLight: boolean;
  setColorMode: (mode: ColorMode) => void;
  disabled?: boolean;
}) {
  const isMode = mode === 'light' ? isLight : !isLight;
  const Icon = mode === 'light' ? SunIcon : MoonIcon;

  const handleClick = () => {
    setColorMode(mode);
  };

  return (
    <LinkBox as='button' width='100%' onClick={handleClick} disabled={disabled}>
      <Stack
        height='100%'
        padding='6px'
        borderRadius='2px'
        direction='row'
        justify='center'
        align='center'
        flex='1'
        background={isMode ? 'secondary.background' : 'transparent'}
        _hover={{
          background: isMode ? 'secondary.background' : 'grey.border',
        }}
      >
        <Icon
          stroke={isMode ? 'secondary.text' : 'grey.tertiaryText'}
          height='20px'
          width='20px'
        />
      </Stack>
    </LinkBox>
  );
}
