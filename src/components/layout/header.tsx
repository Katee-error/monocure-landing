"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/assets/logo.svg";
import {
  Box,
  Container,
  Flex,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { ButtonComp } from "../ui/button";
import { Navbar } from "./navbar";
import { AlignJustify } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Header: React.FC = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      id="sticky-nav"
      py="30px"
      w="100%"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="white"
      boxShadow="sm"
      transition="all 0.3s ease-in-out"
    >
      <Container maxW="container.xl">
        {/* DESKTOP */}
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Box mt="-20px">
            <Link href="/">
              <Image src={logo} alt="logo" sizes="130px" />
            </Link>
          </Box>
          <Navbar />
          <ButtonComp />
        </Flex>

        {/* MOBILE */}
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems={["baseline", "center"]}
          display={{ base: "flex", md: "none" }}
        >
          <Link href="/">
            <Image src={logo} alt="logo" sizes="100px" />
          </Link>
          {/* Кнопка-бургер */}
          <IconButton
            mt="10px"
            icon={<AlignJustify size={30} />}
            aria-label="Open Menu"
            variant="solid"
            onClick={onOpen}
          />
        </Flex>
      </Container>

      {/* Drawer для мобильного меню */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Flex
              flexDirection="column"
              gap="40px"
              mt="20px"
              alignItems="center"
            >
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
                offset={-120}
              >
                <ChakraLink
                  onClick={onClose}
                  mx={4}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                  border="1px solid #667085"
                  p="10px 20px"
                  borderRadius="50px"
                >
                  Startseite
                </ChakraLink>
              </ScrollLink>
              <ScrollLink
                to="section2"
                smooth={true}
                duration={700}
                offset={-80}
              >
                <ChakraLink
                  onClick={onClose}
                  mx={4}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                  border="1px solid #667085"
                  p="10px 20px"
                  borderRadius="50px"
                >
                  Über uns
                </ChakraLink>
              </ScrollLink>
              <ScrollLink
                to="section3"
                smooth={true}
                duration={700}
                offset={-80}
              >
                <ChakraLink
                  onClick={onClose}
                  mx={4}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                  border="1px solid #667085"
                  p="10px 20px"
                  borderRadius="50px"
                >
                  Unser produkt
                </ChakraLink>
              </ScrollLink>
              <ScrollLink
                to="section4"
                smooth={true}
                duration={700}
                offset={-80}
              >
                <ChakraLink
                  onClick={onClose}
                  mx={4}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                  border="1px solid #667085"
                  p="10px 20px"
                  borderRadius="50px"
                >
                  Produkt details
                </ChakraLink>
              </ScrollLink>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
