"use client";
import { Badge, Box, Container, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

export const AboutProduct: React.FC = ({}) => {
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
  return (
    <Box
      my={['10px',"40px"]}
      textAlign={["center"]}
      id="section2"
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
              mb={"20px"}
              fontSize={{ base: "xs", md: "sm" }} // Меньший размер шрифта на мобильных
              fontWeight={600}
            >
              #Über das Produkt
            </Badge>
          </Box>
          <Text fontSize={['md',"2xl"]}>
            Wir haben ein universelles Reinigungsmittel entwickelt, das Ihr
            zuverlässiger Helfer im Kampf gegen Verschmutzungen wird. Es
            entfernt effektiv organische Flecken wie Fett, Speisereste,
            Getränkerückstände, Schweiß sowie Spuren von Gras und Beeren. Das
            Mittel eignet sich zur Reinigung von weißen und farbigen Stoffen,
            Möbeln, Geschirr, Küchenoberflächen und Sanitäranlagen, beseitigt
            unangenehme Gerüche und sorgt für Frische. Das Mittel ist sicher für
            Gesundheit und Umwelt: Es enthält weder Chlor, Phosphate,
            Schwermetalle noch Karzinogene oder Mutagene, was durch unabhängige
            Labortests bestätigt wurde. Unser Reinigungsmittel vereint Effizienz
            und Sicherheit. Probieren Sie es aus und überzeugen Sie sich selbst
            von seinen hervorragenden Eigenschaften!
          </Text>
     
      </Container>
    </Box>
  );
};
