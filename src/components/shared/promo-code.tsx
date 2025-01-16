import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  className?: string;
}

export const PromoCode: React.FC<Props> = ({ className }) => {
  return (
    <Box bgColor={'#0F89D3'} textAlign={'center'} p={'5'}>
      <Container maxW={"container.xl"}>
        <Text color={'white'}>Additional 15% Off Sale. Code: EXTRA15</Text>
      </Container>
    </Box>
  );
};
