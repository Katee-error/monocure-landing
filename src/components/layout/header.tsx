"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
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
  Heading,
  HStack,
} from "@chakra-ui/react";
import { ButtonComp } from "../ui/button";
import { Navbar } from "./navbar";
import { AlignJustify } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { Link as ChakraLink } from "@chakra-ui/react";
import { MailIcon } from "../icons/mail-icon";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return null;
    }
  return (
    <Box
      id="sticky-nav"
      py={["15px", "20px"]}
      w="100%"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="white"
      transition="all 0.3s ease-in-out"
    >
      <Container maxW="container.xl">
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/" passHref>
            <Heading color="#0F89D3" fontWeight="700">
              MONOCURE
            </Heading>
          </Link>
          <Navbar />
          <HStack spacing="5px">
            <MailIcon color="balck" boxSize="22px" />
            <Link href="mailto:office@monocure.ee" passHref>
              <ChakraLink _hover={{ color: "#0F89D3" }} fontWeight="500">
                office@monocure.ee
              </ChakraLink>
            </Link>
          </HStack>
        </Flex>
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems={["baseline", "center"]}
          display={{ base: "flex", md: "none" }}
        >
          <Link href="/" passHref>
            <Heading color="#0F89D3" fontWeight="700">
              MONOCURE
            </Heading>
          </Link>
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

      {/* Drawer for mobile menu */}
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
              <HStack spacing="5px">
                <MailIcon color="balck" boxSize="22px" />
                <Link href="mailto:office@monocure.ee" passHref>
                  <ChakraLink
                    _hover={{ color: "#0F89D3" }}
                    fontWeight="500"
                  >
                    office@monocure.ee
                  </ChakraLink>
                </Link>
              </HStack>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};
