'use client'
import {  Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const handleAmazonClick = () => {
  
  const pixelId = "pxl"; 
  fbq('track', 'Purchase', {
    content_name: 'Amazon Product',
    value: 100, 
    currency: '', 
    pixel_id: pixelId, 
  });
};
export const StickyButton = () => {
  return (
    <Link
      href={
        "https://www.amazon.de/gp/product/B0DHLGHL9K?communicationDeliveryId=f4621982-5226-4aff-ade3-a2d9c2ce2fb9"
      }
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleAmazonClick}
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
        <Button width={['100%',"50%"]} h='60px' bgColor="#0F89D3" size="md">
        Auf Amazon kaufen
        <ArrowRight style={{ marginLeft: "10px" }} />
        </Button>
      </Flex>
    </Link>
  );
};
function fbq(arg0: string, arg1: string, arg2: {
  content_name: string; value: number; 
  currency: string; 
  pixel_id: string;
}) {
  throw new Error("Function not implemented.");
}

