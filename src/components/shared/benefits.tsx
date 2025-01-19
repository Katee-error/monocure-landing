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

const cardsBenefits = [
  {
    id: 1,
    title: "Sicherheit für die ganze Familie",
    description:
      "Formel auf Basis von Natriumpercarbonat, ohne Chlor und Phosphate.",
    img: "/assets/benefits/protect.webp",
  },

  {
    id: 2,
    title: "Vielseitigkeit",
    description:
      "Wirksam gegen alle Verschmutzungen. Ideal für Haushalt, Kleidung und Oberflächen.",
    img: "/assets/benefits/water.webp",
  },
  {
    id: 3,
    title: "Höchste Qualität",
    description:
      "Hergestellt in Deutschland für maximale Zuverlässigkeit und Effektivität.",
    img: "/assets/benefits/germany.webp",
  },
];

export const Benefits: React.FC = ({}) => {
  const MotionCard = motion(Card);

  return (
    <Box pb={"60px"}>
      <Container maxW={"container.xl"}>
        <Heading textAlign="center" mb="8" display={["block", "none"]}>
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
              bgColor={"white"}
              border={"1px solid #0F89D3"}
              color={"white"}
              boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              whileHover={{ scale: 0.9 }}
            >
              <CardBody>
                <Flex alignItems={"start"} gap={"10px"}>
                  <VStack alignItems={"start"}>
                    <Heading as={"h3"} fontSize={"lg"} fontWeight={"600"}>
                      {benefit.title}
                    </Heading>
                    <Text fontSize={"sm"} fontWeight={"400"} color={"gray.500"}>
                      {benefit.description}
                    </Text>
                  </VStack>
                  <Image src={benefit.img} w={"40px"} alt="benefits" />
                </Flex>
              </CardBody>
            </MotionCard>
          ))}
        </SimpleGrid>
        <Flex justifyContent="center" alignItems="center" mt={"20px"}>
          <Grid
            gap={{ base: "20px", md: "30px" }}
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            justifyItems="center" // Горизонтальное центрирование содержимого
            alignContent="center" // Вертикальное центрирование содержимого
          >
            <MotionCard
              w={["100%", "360px"]}
              maxW="md"
              h={"130px"}
              justifyContent={"center"}
              bgColor={"white"}
              border={"1px solid #0F89D3"}
              color={"white"}
              boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              whileHover={{ scale: 0.9 }}
            >
              <CardBody>
                <Flex alignItems={"start"} gap={"10px"}>
                  <VStack alignItems={"start"}>
                    <Heading as={"h3"} fontSize={"lg"} fontWeight={"600"}>
                      Ethik
                    </Heading>
                    <Text fontSize={"sm"} fontWeight={"400"} color={"gray.500"}>
                      Vegane Zertifizierung, ohne tierische Inhaltsstoffe und
                      Tierversuche.
                    </Text>
                  </VStack>
                  <Image
                    src={"/assets/benefits/plant.webp"}
                    w={"40px"}
                    alt="benefits"
                  />
                </Flex>
              </CardBody>
            </MotionCard>
            <MotionCard
              w={["100%", "360px"]}
              maxW="md"
              h={"130px"}
              justifyContent={"center"}
              bgColor={"white"}
              border={"1px solid #0F89D3"}
              color={"white"}
              boxShadow="1px 2px 5px 0 rgba(0, 0, 0, 0.2)"
              whileHover={{ scale: 0.9 }}
            >
              <CardBody>
                <Flex alignItems={"start"} gap={"10px"}>
                  <VStack alignItems={"start"}>
                    <Heading as={"h3"} fontSize={"lg"} fontWeight={"600"}>
                      Einfache Anwendung
                    </Heading>
                    <Text fontSize={"sm"} fontWeight={"400"} color={"gray.500"}>
                      In heißem Wasser auflösen und einweichen – perfekte
                      Sauberkeit ohne
                    </Text>
                  </VStack>
                  <Image
                    src={"/assets/benefits/easy.webp"}
                    w={"40px"}
                    alt="benefits"
                  />
                </Flex>
              </CardBody>
            </MotionCard>
          </Grid>
        </Flex>
      </Container>
    </Box>
  );
};
