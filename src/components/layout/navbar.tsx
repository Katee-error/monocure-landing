'use client'
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { Link as ChakraLink, Box, Flex, Link } from "@chakra-ui/react";

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <nav>
      <Flex
        as={"nav"}
        gap={"10px"}
        color={"black"}
        mb={"-15px"}
        fontWeight={600}
        fontSize={"sm"}
      >
        <ScrollLink
          to="section1"
          smooth={true}
          duration={500}
          offset={-120} // Если есть фиксированный header, учитываем его высоту
        >
          <ChakraLink mx={4} cursor="pointer" _hover={{color:"blue.500"}} border={"1px solid #667085"}
          p={"10px 20px "}
          borderRadius={"50px"}>
            Startseite
          </ChakraLink>
        </ScrollLink>
        <ScrollLink to="section2" smooth={true} duration={700} offset={-80}>
          <ChakraLink mx={4} cursor="pointer" _hover={{color:"blue.500"}} border={"1px solid #667085"}
          p={"10px 20px "}
          borderRadius={"50px"}>
            Über uns
          </ChakraLink>
        </ScrollLink>
        <ScrollLink to="section3" smooth={true} duration={700} offset={-80}>
          <ChakraLink mx={4} cursor="pointer" _hover={{color:"blue.500"}} border={"1px solid #667085"}
          p={"10px 20px "}
          borderRadius={"50px"}>
            Unser produkt
          </ChakraLink>
        </ScrollLink>
        <ScrollLink to="section3" smooth={true} duration={700} offset={-80}>
          <ChakraLink mx={4} cursor="pointer" _hover={{color:"blue.500"}} border={"1px solid #667085"}
          p={"10px 20px "}
          borderRadius={"50px"}>
            Produkt details
          </ChakraLink>
        </ScrollLink>
      </Flex>
    </nav>
  );
};
