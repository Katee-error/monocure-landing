'use client'
import React, { useState, useEffect } from "react";
import { Badge, Box, Container, Heading, Image } from "@chakra-ui/react";

interface Props {
  className?: string;
}

export const Use: React.FC<Props> = ({ className }) => {
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
  return (
    <Box
      // h={"800px"}
      // py={"60px"}
      m={"40px 0 0px"}
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    
    >
      <Container maxW={"container.xl"}>
        <Box textAlign={["center"]}>
          <Badge
            color={"white"}
            bgColor={"#0F89D3"}
            p={"15px"}
            mb={"10px"}
            fontSize={{ base: "xs", md: "sm" }} // Меньший размер шрифта на мобильных
            fontWeight={600}
          >
            #Flecken
          </Badge>
          <Heading textAlign="center" mb="50px">
            Universelle Lösung für alle Arten von Flecken.
          </Heading>
        </Box>
      </Container>

      <Image
        src={"/assets/gallery/use.png"}
        alt={""}
        width={"100%"}
        h={"100%"}
        objectFit={"contain"}
      />
    </Box>
  );
};
