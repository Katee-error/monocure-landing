import {  Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export const StickyButton = () => {
  return (
    <Link
      href={
        "https://www.amazon.de/gp/product/B0DHLGHL9K?communicationDeliveryId=f4621982-5226-4aff-ade3-a2d9c2ce2fb9"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <Flex
        position="fixed"
        justifyContent='center'
        bottom="0"
        left="0"
        width="100%"
        bg="white"
        boxShadow="0px -2px 10px rgba(0, 0, 0, 0.1)"
        zIndex="1000"
        p="10px"
      >
        <Button width="50%" h='60px' bgColor="#0F89D3" size="md">
        Auf Amazon kaufen
        <ArrowRight style={{ marginLeft: "10px" }} />
        </Button>
      </Flex>
    </Link>
  );
};
