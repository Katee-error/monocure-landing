"use client";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
  HStack,
  Badge,
  Link,
  Flex,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ButtonComp } from "../ui/button";
import { CirclePlay } from "lucide-react";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
export const Hero: React.FC = ({}) => {
  return (
    <Box pt={["30px", "20px"]} pb={["40px", "80px"]} id="section1">
      <Container
        maxW={"container.xl"}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minH="400px"
      >
        <Box
          position={"relative"}
          w={{ base: "100%", md: "auto" }}
          mt={{ base: "20px", md: "0px" }}
        >
          <Image
            src={"/assets/pack.webp"}
            alt={"pack"}
            width={700}
            height={600}
          />
        </Box>
      </Container>
    </Box>
  );
};
