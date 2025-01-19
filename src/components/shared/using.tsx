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
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Using: React.FC = ({}) => {
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
      py={["40px", "60px"]}
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW="container.xl">
        <Box textAlign={["center", "start"]}>
          <Badge
            color={"white"}
            bgColor={"#0F89D3"}
            p={"15px"}
            mb={"10px"}
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={600}
          >
            #Verwendung
          </Badge>
          <Heading textAlign={["center", "start"]} mb="40px">
            Drei einfache Schritte:
          </Heading>
        </Box>

        <Flex
          direction={["column", "row"]} // На мобильных устройствах элементы становятся в колонку
          justifyContent={"space-between"}
          gap={["10px", "25px"]} // Меньше отступов на мобильных
          alignItems={"center"}
          wrap="wrap" // Разрешаем оборачивание на мобильных экранах
        >
          <MotionBox
            width={["100%", "31%"]} // На мобильных устройствах элементы будут занимать 100% ширины
            whileHover={{ scale: 1.1 }}
            mb={["20px", "0"]} // Добавляем отступы между блоками на мобильных
          >
            <Box
              width="100%"
              height="240px"
              overflow="hidden"
              borderRadius="10px"
            >
              <Image
                src={"/assets/gallery/kattle.webp"}
                alt={"kattle"}
                width={300}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            <Card
              w={"100%"}
              maxW="md"
              h={["100%", "140px"]}
              mt={"-30px"}
              justifyContent={"center"}
              bgColor={"white"}
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

          <MotionBox
            width={["100%", "31%"]}
            whileHover={{ scale: 1.1 }}
            mb={["20px", "0"]}
          >
            <Box
              width="100%"
              height="240px"
              overflow="hidden"
              borderRadius="10px"
            >
              <Image
                src={"/assets/gallery/2.webp"}
                alt={"hands"}
                width={300}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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

          <MotionBox width={["100%", "31%"]} whileHover={{ scale: 1.1 }}>
            <Box
              width="100%"
              height="240px"
              overflow="hidden"
              borderRadius="10px"
            >
              <Image
                src={"/assets/gallery/3.webp"}
                alt={"hands"}
                width={300}
                height={120}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
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
