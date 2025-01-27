"use client";
import {
  Badge,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
  Text,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import { applications } from "@/data/application";

interface Props {
  className?: string;
}

export const Application: React.FC<Props> = ({ className }) => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const handleTabClick = (index: number) => {
    setCurrentIndex(index);
    setActiveIndex(index);
  };

  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
    setActiveIndex(index);
  };

  const slideSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };

  return (
    <Box
      id="section4"
      py={["40px", "60px", "80px"]}
      ref={ref}
      overflow="hidden"
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW={"container.xl"}>
        <Box mb="40px" textAlign="center">
          <Badge
            color={"white"}
            bgColor={"#0F89D3"}
            p={"15px"}
            mb={"10px"}
            fontSize={{ base: "xs", md: "sm" }}
            fontWeight={600}
          >
            #100
          </Badge>
          <Heading>Mehr als 100 anwendungsmöglichkeiten</Heading>
        </Box>

        <Tabs
          position="relative"
          variant="soft-rounded"
          colorScheme={"green"}
          isLazy
          index={currentIndex}
          onChange={(index) => handleTabChange(index)}
        >
          <Box className="tabs-wrapper" p="10px" borderRadius="full">
            <TabList className="scrolling-tabs" position="relative">
              {applications.map((service, index) => (
                <Tab
                  height={"50px"}
                  color="#0F89D3"
                  key={index}
                  fontSize={"16px"}
                  fontWeight={{ base: "600" }}
                  mr={"20px"}
                  border="1px solid #0F89D3"
                  position="relative"
                  onClick={() => handleTabChange(index)}
                  _selected={{
                    color: "white",
                    bg: "#0F89D3",
                  }}
                  _hover={{
                    bg: "blue.100",
                    color: "#0F89D3",
                  }}
                >
                  {service.tabName}
                </Tab>
              ))}
            </TabList>
          </Box>
          <TabPanels>
            {applications.map((application, index) => (
              <TabPanel key={index} p="0">
                {isMobile ? (
                  <Slider {...slideSettings}>
                    {application.items.map((item, i) => (
                      <VStack
                      mt='20px'
                        key={i}
                        bg="white"
                        borderRadius="md"
                        p={3}
                        spacing={3}
                        width="100%"
                        h="350px"
                        mx="auto"
                      >
                        <Box
                          width="300px"
                          height="300px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          overflow="hidden"
                          borderRadius="md"
                          bg="gray.100"
                          mx="auto"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={120}
                            height={120}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <Text
                          fontSize="lg"
                          fontWeight="semibold"
                          textAlign="center"
                        >
                          {item.title}
                        </Text>
                      </VStack>
                    ))}
                  </Slider>
                ) : (
                  <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                    {application.items.map((item, i) => (
                      <VStack
                      mt='30px'
                        key={i}
                        bg="white"
                        borderRadius="md"
                        boxShadow="md"
                        p={3}
                        spacing={3}
                        width="350px"
                        h="250px"
                        mx="auto"
                      >
                        <Box
                          width="300px"
                          height="300px"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          overflow="hidden"
                          borderRadius="md"
                          bg="gray.100"
                          mx="auto"
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={120}
                            height={120}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <Text
                          fontSize="lg"
                          fontWeight="semibold"
                          textAlign="center"
                        >
                          {item.title}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Box>
  );
};
