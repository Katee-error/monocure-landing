import { StackProps } from '@chakra-ui/react';

import { Stack } from 'components/uikit';

export function HorizontalThemeSwitchStack(props: StackProps) {
  return (
    <Stack
      padding='4px'
      height='40px'
      borderRadius='4px'
      direction='row'
      overflow='hidden'
      borderColor={'grey.border'}
      borderStartWidth='1px'
      borderEndWidth='1px'
      borderTopWidth='1px'
      borderBottomWidth='1px'
      minWidth='76px'
      spacing='4px'
      {...props}
    />
  );
}
