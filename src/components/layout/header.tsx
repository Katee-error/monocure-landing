"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "./../../../public/assets/logo.svg";
import {
  Box,
  Container,
  Flex,
  Button,

} from "@chakra-ui/react";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <Box
      id="sticky-nav"
      // ref={headerRef}
      // position={isNavSticky ? "fixed" : "relative"}
      py={"30px"}
      top="0"
      zIndex="sticky"
      w="100%"
      transition="0.3s"
      bg={"white"}
      opacity={"95%"}
      boxShadow="sm"
    >
      <Container maxW="container.xl">
        {/* DESKTOP */}
        <Flex
          as={"header"}
          justifyContent={"space-between"}
          alignItems={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <Link href={"/home"} >
            <Image src={logo} alt="logo" sizes={"130px"} />
          </Link>
          <Flex as={"nav"} gap={"30px"} color={'black'} fontWeight={500} fontSize={"sm"}>
            <Link
              href={""} // state={{ section: "hero" }}
              color="blue"
              // _hover={{ textDecoration: "none", fontWeight: "600" }}
            >
             Startseite
            </Link>
            <Link
              href={""} // state={{ section: "about" }}
              color="blue"
              // _hover={{ textDecoration: "none", fontWeight: "600" }}
            >
              Über uns
            </Link>
            <Link
              href={""}
              color="blue"
              // state={{ section: "product" }}
            >
              Unser produkt
            </Link>
            <Link
              href={""} // state={{ section: "about" }}
              color="blue"
              // _hover={{ textDecoration: "none", fontWeight: "600" }}
            >
              Produkt details
            </Link>
          </Flex>

          <Button
            border={"#3489C8 2px solid"}
            bgColor={"transparent"}
            fontSize={"sm"}
            fontWeight={500}
            p={"25px 40px"}
            borderRadius={"5px"}
            _hover={{ bgColor: "hover.button" }}
          >
           KONTAKT AUFNEHMEN
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};
