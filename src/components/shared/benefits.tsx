"use client";
import {
  Box,
  Card,
  CardBody,
  Container,
  Grid,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import plant from './../../../public/assets/benefits/plant.png'


interface Props {
  className?: string;
}

const cardsBenefits = [
  {
    id: 1,
    title: "Sicherheit für die ganze Familie",
    description:
      "Formel auf Basis von Natriumpercarbonat, ohne Chlor und Phosphate.",
      img: '/assets/benefits/protect.png'
  },
 
  {
    id: 2,
    title: "Vielseitigkeit",
    description:
      "Wirksam gegen alle Verschmutzungen. Ideal für Haushalt, Kleidung und Oberflächen.",
      img: '/assets/benefits/water.png'
  },
  {
    id: 3,
    title: "Höchste Qualität",
    description:
      "Hergestellt in Deutschland für maximale Zuverlässigkeit und Effektivität.",
      img: '/assets/benefits/germany.png'
  },
];

export const Benefits: React.FC<Props> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Удалить наблюдатель после срабатывания
        }
      },
      { threshold: 0.3 } // Срабатывает, если 20% блока в области видимости
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Очистка
  }, []);
  const MotionCard = motion(Card)

  return (
    <Box
      py={"20px"}
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW={"container.xl"}>
      <Heading textAlign="center" mb="8" display={['block', 'none']}>
      Warum man uns wählt
      </Heading>
        <SimpleGrid
          minChildWidth={{ base: "300px", md: "380px" }}
          gap={{ base: "20px", md: "20px" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {cardsBenefits.map((benefit) => (
            <MotionCard
              key={benefit.id}
              maxW="md"
              h={"130px"}
              justifyContent={"center"}
              bgColor={"transparent"}
              border={"1px solid #0F89D3"}
              color={"white"}
              boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              whileHover={{ scale: 0.9 }}
            >
              <CardBody>
                <Flex alignItems={"start"} gap={"10px"}>
                  <VStack alignItems={"start"}>
                    <Heading as={"h3"} fontSize={"md"} fontWeight={"500"}>
                      {benefit.title}
                    </Heading>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"400"}
                      color={"gray.500"}
                    >
                      {benefit.description}
                    </Text>
                  </VStack>
                  <Image src={benefit.img} w={'40px'}/>
                </Flex>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
        <Flex justifyContent="center" alignItems="center" mt={"20px"} >
          <Grid
           
            gap={{ base: "20px", md: "30px" }}
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            justifyItems="center" // Горизонтальное центрирование содержимого
            alignContent="center" // Вертикальное центрирование содержимого
          >
            <MotionCard
              w={"360px"}
              maxW="md"
              h={"130px"}
              justifyContent={"center"}
              bgColor={"transparent"}
              border={"1px solid #0F89D3"}
              color={"white"}
              boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              whileHover={{ scale: 0.9 }}
            >
              <CardBody>
                <Flex alignItems={"start"} gap={"10px"}>
                  <VStack alignItems={"start"}>
                    <Heading
                      as={"h3"}
                      fontSize={"md"}
                      fontWeight={"500"}
                    >Ethik</Heading>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"400"}
                      color={"gray.500"}
                    >Vegane Zertifizierung, ohne tierische Inhaltsstoffe und Tierversuche.</Text>
                  </VStack>
                  <Image src={'/assets/benefits/plant.png'} w={'40px'}/>
                </Flex>
              </CardBody>
            </MotionCard>
            <MotionCard
              w={"360px"}
              maxW="md"
              h={"130px"}
              justifyContent={"center"}
              bgColor={"transparent"}
              border={"1px solid #0F89D3"}
              color={"white"}
              boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              whileHover={{ scale: 0.9 }}
            >
              <CardBody>
                <Flex alignItems={"start"} gap={"10px"}>
                  <VStack alignItems={"start"}>
                    <Heading
                      as={"h3"}
                      fontSize={"md"}
                      fontWeight={"500"}
                    >Einfache Anwendung</Heading>
                    <Text
                      fontSize={"xs"}
                      fontWeight={"400"}
                      color={"gray.500"}
                    >In heißem Wasser auflösen und einweichen – perfekte Sauberkeit ohne</Text>
                  </VStack>
                  <Image src={'/assets/benefits/easy.png'} w={'40px'}/>
                </Flex>
              </CardBody>
            </MotionCard>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};

