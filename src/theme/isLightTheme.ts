import { useMemo } from 'react';

import { useColorMode } from '@chakra-ui/react';

function useColorModeChecker() {
  const { colorMode } = useColorMode();

  return useMemo(() => colorMode === 'light', [colorMode]);
}

export default useColorModeChecker;
