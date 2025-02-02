"use client";
import { Link as ScrollLink } from "react-scroll";
import React, { useEffect, useState } from "react";
import { Link as ChakraLink, Flex } from "@chakra-ui/react";

export const Navbar: React.FC = ({}) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <nav>
      <Flex
        as={"nav"}
        color={"black"}
        gap={"15px"}
        fontWeight={600}
        fontSize={"sm"}
      >
        <ScrollLink to="section4" smooth={true} duration={700} offset={-80}>
          <ChakraLink
            cursor="pointer"
            _hover={{ color: "blue.500" }}
            border={"1px solid #667085"}
            p={"10px 20px "}
            borderRadius={"50px"}
          >
            Anwendung
          </ChakraLink>
        </ScrollLink>
        <ScrollLink to="section2" smooth={true} duration={700} offset={-80}>
          <ChakraLink
            cursor="pointer"
            _hover={{ color: "blue.500" }}
            border={"1px solid #667085"}
            p={"10px 20px "}
            borderRadius={"50px"}
          >
            Vorher/Nachher
          </ChakraLink>
        </ScrollLink>
        <ScrollLink to="section5" smooth={true} duration={700} offset={-80}>
          <ChakraLink
            cursor="pointer"
            _hover={{ color: "blue.500" }}
            border={"1px solid #667085"}
            p={"10px 20px "}
            borderRadius={"50px"}
          >
            Bewertungen
          </ChakraLink>
        </ScrollLink>
      </Flex>
    </nav>
  );
};
