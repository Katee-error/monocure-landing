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
    <Box pt={["30px", "60px"]} pb={["40px", "80px"]} id="section1">
      <Container maxW={"container.xl"}>
        <HStack
          alignItems={"center"}
          justifyContent={{ base: "center", md: "space-between" }}
          mt={["0px", "-30px"]}
          flexDirection={{ base: "column", md: "row" }} // Column on mobile, row on desktop
          textAlign={{ base: "center", md: "left" }} // Center text on mobile
        >
          {/* Text Animation */}
          <MotionVStack
            alignItems={{ base: "center", md: "start" }} // Center text on mobile
            w={{ base: "100%", md: "65%" }} // Full width on mobile
            mt={{ base: "20px", md: "-20px" }} // Adjust margin on mobile
            px={{ base: "20px", md: "0" }} // Padding on mobile
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Badge
              color={"white"}
              bgColor={"red"}
              p={"15px"}
              mb={"10px"}
              fontSize={{ base: "xs", md: "sm" }} // Smaller font size on mobile
              fontWeight={600}
            >
              #ALLES-IN-EINEM
            </Badge>
            <Heading
              fontSize={{ base: "48px", md: "70px" }} // Smaller font size on mobile
              fontWeight={600}
              lineHeight={["1.2", "1.1"]} // Line height optimization
            >
              <Text as="span" color="#0F89D3">
                Monocure
              </Text>
              - Ich bin dein Mittel für alles.
            </Heading>
            <Text
              fontSize={{ base: "md", md: "md" }}
              m={["10px 0 ", "10px 0 25px"]}
            >
              Ein Produkt – Sauberkeit für das ganze Zuhause.
            </Text>
            <Flex
              alignItems={"center"}
              gap={"20px"}
              flexDirection={{ base: "column", md: "row" }}
            >
              <ButtonComp />
              <Link
                href="https://www.amazon.de/vdp/161b96e0ec2340599ede75659da925d7?ref=dp_vse_ibvc0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Text>Hoe het werkt</Text>
                  <CirclePlay  size={30} style={{ marginLeft: "10px", borderColor: 'black' }} />
                </Button>
              </Link>
            </Flex>
          </MotionVStack>

          {/* Image Animation */}
          <MotionBox
            position={"relative"}
            borderRadius={"20px"}
            w={{ base: "100%", md: "auto" }} // Full width on mobile
            mt={{ base: "40px", md: "0px" }} // Margin top adjustment for mobile
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src={"/assets/pack.png"}
              alt={"pack"}
              width={700}
              height={600}
              style={{
                width: "100%", // Full width image on mobile
                height: "auto", // Maintain aspect ratio
                marginTop: "20px", // Adjust margin top for mobile
              }}
            />
          </MotionBox>
        </HStack>
      </Container>
    </Box>
  );
};
