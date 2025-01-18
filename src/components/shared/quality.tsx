"use client";
import {
  Badge,
  Box,
  CardBody,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
  Card,
  Text,
  Grid,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ButtonComp } from "../ui";
import { motion } from "framer-motion";

interface Props {
  className?: string;
}
const useMethod = [
  {
    id: 1,
    title: "KALK",
    img: "/assets/use/1.png",
  },
  {
    id: 2,
    title: "ERDE UND GRAS",
    img: "/assets/use/2.png",
  },
  {
    id: 3,
    title: "MAKE-UP",
    img: "/assets/use/3.png",
  },
  {
    id: 4,
    title: "FETT",
    img: "/assets/use/4.png",
  },
  {
    id: 5,
    title: "BLUT",
    img: "/assets/use/5.png",
  },
  {
    id: 6,
    title: "SILBERSULFID",
    img: "/assets/use/6.png",
  },
  // {
  //   id: 7,
  //   title: "SILBERSULFID",
  //   img: "/assets/use/7.png",
  // },
  // {
  //   id: 8,
  //   title: "SILBERSULFID",
  //   img: "/assets/use/8.png",
  // },
  // {
  //   id: 9,
  //   title: "SILBERSULFID",
  //   img: "/assets/use/9.png",
  // },
  //   {
  //     id: 10,
  //     title: "SILBERSULFID",
  //     img: "/assets/use/10.png",
  //   },
  //   {
  //     id: 11,
  //     title: "SILBERSULFID",
  //     img: "/assets/use/11.png",
  //   },
  //   {
  //     id: 12,
  //     title: "SILBERSULFID",
  //     img: "/assets/use/12.png",
  //   },
];

export const Quality: React.FC<Props> = ({ className }) => {
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
      { threshold: 0.2 } // Срабатывает, если 20% блока в области видимости
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); // Очистка
  }, []);
  const MotionBox = motion(Box);
  return (
    <Box
      id="section3"
      // bg={'blue.25'}
      py={["40px", "60px"]}
      // my={'40px'}
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW={"container.xl"}>
        <Flex
          justifyContent={"space-between"}
          gap={"20px"}
          alignItems={"center"}
          //   boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
          borderRadius={"20px"}
          // p={"30px 40px"}
          //   bg={'white'}
        >
          <Box w={"50%"}>
            <Badge
              color={"white"}
              bgColor={"#0F89D3"}
              p={"15px"}
              mb={"10px"}
              fontSize={{ base: "xs", md: "sm" }} // Меньший размер шрифта на мобильных
              fontWeight={600}
            >
              #100
            </Badge>
            <Heading textAlign="start" mb="20px">
              Sauberkeit im ganzen Haus – ein Produkt für alles
            </Heading>
            <Text fontSize={"md"} mb={"40px"}>
              Unser Produkt entfernt effektiv organische Flecken wie Fett,
              Lebensmittelreste, Gras, Beeren und unangenehme Gerüche auf weißen
              und bunten Stoffen, Geschirr sowie Polstermöbeln.
            </Text>
            <ButtonComp />
          </Box>

          <Grid
            templateColumns="repeat(3, 1fr)" // 6 элементов в строке
            gap={{ base: "20px", md: "40px" }}
            alignItems={"center"}
            mt={"30px"}
          >
            {useMethod.map((use) => (
              <MotionBox
                key={use.id}
                maxW="sm"
                whileHover={{ scale: 1.1 }}
                textAlign="center" // Центрируем текст
              >
                <Box
                  width="120px" // Ширина круга
                  height="120px" // Высота круга
                  overflow="hidden"
                  border={"1px solid #0F89D3"}
                  borderRadius="50%" // Делаем круг
                  mx="auto" // Центрируем внутри грида
                >
                  <Image
                    src={use.img}
                    alt=""
                    width={120}
                    height={120}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // Сохраняем пропорции изображения
                    }}
                  />
                </Box>
                <Text mt="10px" fontSize="md" fontWeight="600">
                  {use.title}
                </Text>
              </MotionBox>
            ))}
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
