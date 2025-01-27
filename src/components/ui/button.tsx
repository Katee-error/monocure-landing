'use client'
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
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
export const ButtonComp: React.FC = ({}) => {
  const MotionButton = motion.create(Button);
  return (
    <Link
      href={
        "https://www.amazon.de/gp/product/B0DHLGHL9K?communicationDeliveryId=f4621982-5226-4aff-ade3-a2d9c2ce2fb9"
      }
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleAmazonClick}
    >
      <MotionButton
        p={{ base: "10px 20px", md: "25px" }}
        borderRadius="25px"
        fontSize={{ base: "14px", md: "sm" }}
        fontWeight={600}
        color="#0F89D3"
        bg="white"
        boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
        whileHover={{ scale: 1.05 }}
      >
        Auf Amazon kaufen
        <ArrowRight style={{ marginLeft: "10px" }} />
      </MotionButton>
    </Link>
  );
};
function fbq(arg0: string, arg1: string, arg2: { content_name: string; value: number; currency: string; pixel_id: string; }) {
  throw new Error("Function not implemented.");
}

