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
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { HighlightedText } from "../ui/heading";
import { Plus } from "lucide-react";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  const points = [
    {
      id: 1,
      top: "20%",
      left: "30%",
      description: "Описание для первой точки",
    },
    {
      id: 2,
      top: "40%",
      left: "50%",
      description: "Описание для второй точки",
    },
    {
      id: 3,
      top: "70%",
      left: "45%",
      description: "Описание для третьей точки",
    },
  ];

  return (
    <Box p={"60px"}>
      <Container maxW={"container.xl"}>
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          mt={"-30px"}
        >
          <VStack alignItems={"start"} w={"50%"}>
            <Badge color={"white"} bgColor={"blue"} p={"8px"} mb={"20px"}>
              #ALLES-IN-EINEM
            </Badge>
            <HighlightedText /> -
            <Heading fontSize={"6xl"} fontWeight={600}>Ich bin dein Mittel für alles.</Heading>
            <Text fontSize={"lg"}>
              Ein Produkt – Sauberkeit für das ganze Zuhause.
            </Text>
            <Button variant={"primary"}>Byu now</Button>
          </VStack>
          <Box position={"relative"} borderRadius={"20px"} bg="blue.50">
            <Image
              src={"/assets/pack.png"}
              alt={"pack"}
              width={600}
              height={600}
            />
            {points.map((point) => (
              <Tooltip
                key={point.id}
                label={point.description}
                bg="white"
                color="black"
                fontSize={"lg"}
                hasArrow
                placement="top"
              >
                <Circle
                  size="40px"
                  bg="white"
                  color="blue.500"
                  position="absolute"
                  top={point.top}
                  left={point.left}
                  transform="translate(-50%, -50%)"
                  cursor="pointer"
                  _hover={{ bg: "blue.600" }}
                >
                  +
                </Circle>
              </Tooltip>
            ))}
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};
