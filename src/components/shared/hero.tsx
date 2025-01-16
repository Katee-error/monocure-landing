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
  Circle,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { HighlightedText } from "../ui/heading";
import { motion } from "framer-motion";
import { ButtonComp } from "../ui/button";

interface Props {
  className?: string;
}
const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
export const Hero: React.FC<Props> = ({}) => {
  const MotionButton = motion(Button);

  return (
    <Box py={["30px", "80px"]} id="section1">
      <Container maxW={"container.xl"}>
        <HStack
          alignItems={"center"}
          justifyContent={{ base: "center", md: "space-between" }}
          mt={["0px", "-30px"]}
          flexDirection={{ base: "column", md: "row" }} // Колонка на мобильных, строка на десктопах
          textAlign={{ base: "center", md: "left" }} // Центровка текста для мобильных
        >
          {/* Анимация текста */}
          <MotionVStack
            alignItems={{ base: "center", md: "start" }} // Центровка текста на мобильных
            w={{ base: "100%", md: "50%" }} // Полная ширина на мобильных
            mt={{ base: "0", md: "-20px" }} // Убираем отрицательный отступ на мобильных
            px={{ base: "20px", md: "0" }} // Отступы по бокам на мобильных
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Badge
              color={"white"}
              bgColor={"#0F89D3"}
              p={"15px"}
              mb={"10px"}
              fontSize={{ base: "xs", md: "sm" }} // Меньший размер шрифта на мобильных
              fontWeight={600}
            >
              #ALLES-IN-EINEM
            </Badge>
            <Heading
              fontSize={{ base: "48px", md: "68px" }} // Меньший шрифт на мобильных
              fontWeight={600}
              lineHeight={{ base: "1.2" }} // Оптимизация высоты строки
            >
              <Text as="span" color="#0F89D3">
                Monocure
              </Text>{" "}
              - Ich bin dein Mittel für alles.
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} m={['10px 0 ',"10px 0 25px"]}>
              Ein Produkt – Sauberkeit für das ganze Zuhause.
            </Text>
            <ButtonComp />
          </MotionVStack>

          {/* Анимация картинки */}
          <MotionBox

            position={"relative"}
            borderRadius={"20px"}
            bg="blue.50"
            w={{ base: "100%", md: "auto" }} // Полная ширина на мобильных
            mt={{ base: "60px", md: "0px" }} // Отступ сверху на мобильных
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              src={"/assets/pack.png"}
              alt={"pack"}
              width={600}
              height={500}
              style={{ width: "100%", height: "auto" }} // Адаптивная ширина изображения
            />
          </MotionBox>
        </HStack>
      </Container>
    </Box>
  );
};
