"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/assets/logo.svg";
import {
  Box,
  Container,
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ButtonComp } from "../ui/button";
import { Navbar } from "./navbar";
import { AlignJustify } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as ChakraLink } from "@chakra-ui/react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const MotionButton = motion(Button);
  return (
    <Box
      id="sticky-nav"
      py={"30px"}
      top="0"
      zIndex="sticky"
      w="100%"
      transition="0.3s"
      bg={"white"}
      opacity={"95%"}
    >
      <Container maxW="container.xl">
        {/* DESKTOP */}
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Link href={"/"}>
            <Image src={logo} alt="logo" sizes={"140px"} />
          </Link>
          <Navbar />
          <ButtonComp />
        </Flex>

        {/* MOBILE */}
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          alignItems={["baseline", "center"]}
          display={{ base: "flex", md: "none" }}
        
        >
          <Link href={"/"}>
            <Image src={logo} alt="logo" sizes={"100px"} />
          </Link>
          {/* Кнопка-бургер */}
          <IconButton
            mt={"10px"}
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
            <Flex flexDirection="column" gap="40px" mt={"20px"} alignItems={'center'}>
              <ScrollLink
                to="section1"
                smooth={true}
                duration={500}
                offset={-120} // Если есть фиксированный header, учитываем его высоту
              >
                <ChakraLink
                onClick={onClose}
                  mx={4}
                  cursor="pointer"
                  _hover={{ color: "blue.500" }}
                  border={"1px solid #667085"}
                  p={"10px 20px "}
                  borderRadius={"50px"}
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
                  border={"1px solid #667085"}
                  p={"10px 20px "}
                  borderRadius={"50px"}
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
                  border={"1px solid #667085"}
                  p={"10px 20px "}
                  borderRadius={"50px"}
                >
                  Unser produkt
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
                  border={"1px solid #667085"}
                  p={"10px 20px "}
                  borderRadius={"50px"}
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
