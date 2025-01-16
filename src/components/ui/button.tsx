import React from "react";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  className?: string;
}

export const ButtonComp: React.FC<Props> = ({ className }) => {
  const MotionButton = motion(Button);
  return (
    <Link
      href={
        "https://www.amazon.de/gp/product/B0DHLGHL9K?communicationDeliveryId=f4621982-5226-4aff-ade3-a2d9c2ce2fb9"
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      <MotionButton
        p={{ base: "10px 20px", md: "30px 30px" }}
        borderRadius="50px"
        mb={"-15px"}
        fontSize={{ base: "14px", md: "sm" }}
        fontWeight={600}
        color="white"
        bg="#0F89D3"
        _hover={{ bgColor: "brand.primary", color: "white" }}
        boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
        whileHover={{ scale: 1.05 }}
      >
        Auf Amazon kaufen
      </MotionButton>
    </Link>
  );
};
