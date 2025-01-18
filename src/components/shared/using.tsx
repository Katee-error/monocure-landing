"use client";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}

export const Using: React.FC<Props> = ({ className }) => {
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
      // bg={'gray.100'}
      py={"60px"}
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW="container.xl">
        <Box>
          <Badge
            color={"white"}
            bgColor={"#0F89D3"}
            p={"15px"}
            mb={"10px"}
            fontSize={{ base: "xs", md: "sm" }} // Smaller font size on mobile
            fontWeight={600}
          >
            #Verwendung
          </Badge>
          <Heading textAlign="start" mb="40px">
            Drei einfache Schritte:
          </Heading>
        </Box>

        <Flex
          justifyContent={"space-between"}
          gap={"25px"}
          alignItems={"start"}
        >
          <MotionBox width="31%" whileHover={{ scale: 1.1}}>
            <Box
              width="385px" /* Фиксированная ширина */
              height="240px" /* Фиксированная высота */
              overflow="hidden" /* Убираем всё, что выходит за границы */
              borderRadius="10px"
            >
              <Image
                src={"/assets/gallery/kattle.png"}
                alt={""}
                width={300}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Сохраняем пропорции
                }}
              />
            </Box>

            <Card
              w={"100%"}
              maxW="md"
              h={"140px"}
              mt={"-30px"}
              justifyContent={"center"}
              bgColor={"white"}
              // border={"1px solid #0F89D3"}
              color={"white"}
              bg="white"
              borderRadius={"0 0 10px 10px"}
              boxShadow="md"
              alignItems={"start"}
            >
              <CardBody>
                <Text>Füllen Sie heißes Wasser (60-90 °C) ein.</Text>
              </CardBody>
            </Card>
          </MotionBox>

          <MotionBox width="31%" whileHover={{ scale: 1.1}}>
            <Box
              width="385px" /* Фиксированная ширина */
              height="240px" /* Фиксированная высота */
              overflow="hidden" /* Убираем всё, что выходит за границы */
              borderRadius="10px"
            >
              {" "}
              <Image
                src={"/assets/gallery/2.JPG"}
                alt={""}
                width={300}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Сохраняем пропорции
                }}
              />
            </Box>

            <Card
              w={"100%"}
              maxW="md"
              h={"140px"}
              mt={"-30px"}
              justifyContent={"center"}
              bgColor={"white"}
              // border={"1px solid #0F89D3"}
              color={"white"}
              bg="white"
              borderRadius={"0 0 10px 10px"}
              boxShadow="md"
              alignItems={"start"}
            >
              <CardBody>
                <Text>
                  Weichen Sie die Kleidung ein / tragen Sie das Mittel auf die
                  Oberfläche auf.
                </Text>
              </CardBody>
            </Card>
          </MotionBox>

          <MotionBox width="31%"  whileHover={{ scale: 1.1}}>
            <Box
              width="385px" /* Фиксированная ширина */
              height="240px" /* Фиксированная высота */
              overflow="hidden" /* Убираем всё, что выходит за границы */
              borderRadius="10px"
            >
              {" "}
              <Image
                src={"/assets/gallery/3.JPG"}
                alt={""}
                width={300}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Сохраняем пропорции
                }}
              />
            </Box>
            <Card
              w={"100%"}
              maxW="md"
              h={"140px"}
              mt={"-30px"}
              justifyContent={"center"}
              bgColor={"white"}
              // border={"1px solid #0F89D3"}
              color={"white"}
              bg="white"
              borderRadius={"0 0 10px 10px"}
              boxShadow="md"
              alignItems={"start"}
            >
              <CardBody>
                <Text>
                  Spülen Sie mit Wasser und waschen Sie die Kleidung wie gewohnt
                  / Wischen Sie die Oberfläche ab und spülen Sie sie mit Wasser
                  nach.
                </Text>
              </CardBody>
            </Card>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};
