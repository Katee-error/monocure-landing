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
      py={["15px", "30px"]}
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
              <Image src={logo} alt="logo" height={40} width={130} />
            </Link>
          </Box>
          <Navbar />
        </Flex>

        {/* MOBILE */}
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems={["baseline", "center"]}
          display={{ base: "flex", md: "none" }}
        >
          <Link href="/">
            <Image src={logo} alt="logo" height={40} width={110} />
          </Link>
          {/* Кнопка-бургер */}
          <IconButton
            mt="10px"
            icon={<AlignJustify size={30} />}
            aria-label="Open Menu"
            variant="solid"
            color={"black"}
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
                to="section3"
                smooth={true}
                duration={700}
                offset={-80}
              >
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
              <ScrollLink
                to="section4"
                smooth={true}
                duration={700}
                offset={-80}
              >
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
              <ScrollLink
                to="section5"
                smooth={true}
                duration={700}
                offset={-80}
              >
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

              <ButtonComp />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
