"use client";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Heading,
  Image,
  Flex,
  Container,
  Badge,
  Button,
} from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  arrows: boolean;
}

export const BeforeAfter: React.FC = () => {
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
      { threshold: 0.2 } 
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect(); 
  }, []);

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    
  };
  const sliderRef = useRef<Slider | null>(null);

  // Данные для слайдов
  const slides = [
    {
      before: "/assets/after-before/1-bf.jpg",
      after: "/assets/after-before/1-af.jpg",
    },
    {
      before: "/assets/after-before/2-bf.jpg",
      after: "/assets/after-before/2-af.jpg",
    },
    {
      before: "/assets/after-before/3-bf.jpg",
      after: "/assets/after-before/3-af.jpg",
    },
    {
      before: "/assets/after-before/4-bf.jpg",
      after: "/assets/after-before/4-af.jpg",
    },
  ];

  return (
    <Box
    id="section4"
      py={["20px", "50px"]}
      mb={'40px'}
      position="relative"
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW="container.xl">
        <Heading textAlign="center" mb={["20px", "40px"]}>
          Sichtbare Ergebnisse nach der Anwendung von Monocure.
        </Heading>

        {/* Кнопка "Назад" */}
        <Button
          position="absolute"
          top="60%"
          left={{ base: "10px", md: "20" }} 
          transform="translateY(-50%)"
          zIndex="1"
          bg="#0F89D3"
          color="white"
          borderRadius="50px"
          boxShadow="md"
          _hover={{ bg: "blue.600" }}
          onClick={() => sliderRef.current?.slickPrev()} 
          size={{ base: "sm", md: "md" }} 
        >
          <ChevronLeft />
        </Button>

        {/* Слайдер */}
        <Slider {...settings} ref={sliderRef} >
          {slides.map((slide, index) => (
            <Box key={index} overflow="visible" >
              <Flex
                justifyContent="center"
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }}
                display="flex"
                gap="20px"
                pb={'30px'}
              >
                {/* Фото "До" */}
                <Box
                  textAlign="center"
                  width={{ base: "100%", md: "40%" }}
                  px="10px"
                >
                  <Badge
                    color="white"
                    bgColor="#0F89D3"
                    p="15px"
                    mb="20px"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight={600}
                  >
                    #Before
                  </Badge>
                  <Image
                    src={slide.before}
                    alt={`Before ${index + 1}`}
                    borderRadius="md"
                    boxShadow="md"
                    width="100%"
                    height={{ base: "300px", md: "350px" }} 
                    objectFit="cover"
                  />
                </Box>

                {/* Фото "После" */}
                <Box
                  textAlign="center"
                  width={{ base: "100%", md: "40%" }}
                  px="10px"
                >
                  <Badge
                    color="white"
                    bgColor="#0F89D3"
                    p="15px"
                    mb="20px"
                    fontSize={{ base: "xs", md: "sm" }}
                    fontWeight={600}
                  >
                    #After
                  </Badge>
                  <Image
                    src={slide.after}
                    alt={`After ${index + 1}`}
                    borderRadius="md"
                    boxShadow="md"
                    width="100%"
                    height={{ base: "300px", md: "350px" }} 
                    objectFit="cover"
                  />
                </Box>
              </Flex>
            </Box>
          ))}
        </Slider>

        {/* Кнопка "Вперед" */}
        <Button
          position="absolute"
          top="60%"
          right={{ base: "10px", md: "20" }}
          transform="translateY(-50%)"
          zIndex="1"
          bg="#0F89D3"
          color="white"
          borderRadius="full"
          boxShadow="md"
          _hover={{ bg: "blue.600" }}
          onClick={() => sliderRef.current?.slickNext()} 
          size={{ base: "sm", md: "md" }} 
        >
          <ChevronRight />
        </Button>
      </Container>
    </Box>
  );
};
