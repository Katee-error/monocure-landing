"use client";
import {
  Badge,
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ButtonComp } from "./../ui/button";
import { motion } from "framer-motion";

const useMethod = [
  {
    id: 1,
    title: "KALK",
    img: "/assets/use/1.webp",
  },
  {
    id: 2,
    title: "ERDE UND GRAS",
    img: "/assets/use/2.webp",
  },
  {
    id: 3,
    title: "MAKE-UP",
    img: "/assets/use/3.webp",
  },
  {
    id: 4,
    title: "FETT",
    img: "/assets/use/4.webp",
  },
  {
    id: 5,
    title: "BLUT",
    img: "/assets/use/5.webp",
  },
  {
    id: 6,
    title: "SILBERSULFID",
    img: "/assets/use/6.webp",
  },
];

export const Quality: React.FC = ({}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); 
  }, []);
  const MotionBox = motion(Box);
  return (
    <Box
      id="section3"
      py={["40px", "60px", "80px"]} 
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW={"container.xl"}>
        <Flex
        bgColor='#0F89D3'
        p='50px'
          justifyContent={"space-between"}
          gap={["15px", "20px", "30px"]} 
          alignItems={"center"}
          borderRadius={"20px"}
          direction={["column", "row"]} 
        >
          <Box w={["100%", "50%"]} textAlign={["center", "start"]} color='white'>
            <Badge
              color={"#0F89D3"}
              bgColor={"white"}
              p={"15px"}
              mb={"10px"}
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight={600}
            >
              #100
            </Badge>
            <Heading mb="20px" color='white'>
              Sauberkeit im ganzen Haus – ein Produkt für alles
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} mb={["20px", "40px"]} color='white'>
              Unser Produkt entfernt effektiv organische Flecken wie Fett,
              Lebensmittelreste, Gras, Beeren und unangenehme Gerüche auf weißen
              и bunten Stoffах, Geschirr sowie Polstermöbeln.
            </Text>
            <ButtonComp />
          </Box>

          <Grid
            templateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]} 
            gap={{ base: "20px 50px", md: "40px" }}
            alignItems={"center"}
            mt={"30px"}
           
            borderRadius='20px'
            p='20px'
          >
            {useMethod.map((use) => (
              <MotionBox
                key={use.id}
                maxW="sm"
                whileHover={{ scale: 1.1 }}
                textAlign="center"
              >
                <Box
                  width={["100px", "120px"]}
                  height={["100px", "120px"]}
                  overflow="hidden"
               
                  borderRadius="50%"
                  mx="auto"
                >
                  <Image
                    src={use.img}
                    alt="using"
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box bgColor="white" p='7px' borderRadius='10px' mt='10px'>
                   <Text fontSize={["sm", "14px"]} color="#0F89D3" fontWeight="500">
                  {use.title}
                </Text>
                </Box>
               
              </MotionBox>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
