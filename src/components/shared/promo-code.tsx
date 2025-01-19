"use client";
import {
  Box,
  Container,
  Text,
  IconButton,
  useClipboard,
  Flex,
} from "@chakra-ui/react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export const PromoCode: React.FC = () => {
  const promoCode = "EXTRA15";
  const { hasCopied, onCopy } = useClipboard(promoCode);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <Box bgColor={"#0F89D3"} textAlign={"center"} p={5}>
      <Container maxW={"container.xl"}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text
            color="white"
            fontSize={{ base: "sm", md: "md" }} 
            textAlign="center"
          >
            Additional 15% Off Sale. Code:
          </Text>
          <Flex alignItems={'center'} ml={['0px', '6px']}>
            <Text color={"white"}>
              <strong>{promoCode}</strong>
            </Text>
            <IconButton
              aria-label="Copy Promo Code"
              icon={
                isCopied ? (
                  <Check color="#25d224" />
                ) : (
                  <Copy color="white" width={"18px"} />
                )
              }
              bg="transparent"
              _hover={{ bg: "transparent" }}
              _active={{ bg: "transparent" }}
              size="sm"
              onClick={handleCopy}
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
