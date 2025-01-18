"use client";
import React from "react";
import {
  Box,
  Container,
  Flex,
  VStack,
  Link as ChakraLink,
  Image,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

export const Footer: React.FC = () => {
  return (
    <Box bg="blue.50" py={{ base: "40px", md: "60px" }}>
      <Container maxW="container.xl">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="baceline"
          gap={{ base: "30px", md: "20px" }}
        >
          {/* Логотип */}
          <Box textAlign="center">
            <ChakraLink href="/">
              <Image
                src={"/assets/logo.svg"}
                alt="logo"
                maxW="140px"
                mx="auto"
              />
            </ChakraLink>
          </Box>

          {/* Навигация */}
          <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            gap={['15px',"30px"]}
            fontWeight={500}
          >
            <ScrollLink
              to="section1"
              smooth={true}
              duration={500}
              offset={-120}
            >
              <ChakraLink
                cursor="pointer"
                _hover={{ color: "blue.700" }}
                color="#0F89D3"
              >
                Startseite
              </ChakraLink>
            </ScrollLink>
            <ScrollLink to="section2" smooth={true} duration={700} offset={-80}>
              <ChakraLink
                cursor="pointer"
                _hover={{ color: "blue.700" }}
                color="#0F89D3"
              >
                Über uns
              </ChakraLink>
            </ScrollLink>
            <ScrollLink to="section3" smooth={true} duration={700} offset={-80}>
              <ChakraLink
                cursor="pointer"
                _hover={{ color: "blue.700" }}
                color="#0F89D3"
              >
                 Anwendung
              </ChakraLink>
            </ScrollLink>
            <ScrollLink to="section4" smooth={true} duration={700} offset={-80}>
              <ChakraLink
                cursor="pointer"
                _hover={{ color: "blue.700" }}
                color="#0F89D3"
              >
                Vorher/Nachher
              </ChakraLink>
            </ScrollLink>
            <ScrollLink to="section5" smooth={true} duration={700} offset={-80}>
              <ChakraLink
                cursor="pointer"
                _hover={{ color: "blue.700" }}
                color="#0F89D3"
              >
                Bewertungen
              </ChakraLink>
            </ScrollLink>
          </Flex>

          {/* Контакты */}
          <Box textAlign="center">
            <Heading fontSize="sm" textTransform="uppercase" mb="10px">
              Contact
            </Heading>
            <VStack spacing="5px">
              <ChakraLink
                href="mailto:office@monocure.ee"
                color="#0F89D3"
                _hover={{ color: "blue.700" }}
              >
                office@monocure.ee
              </ChakraLink>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
