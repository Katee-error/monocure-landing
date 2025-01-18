import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  className?: string;
}

export const AboutProduct: React.FC<Props> = ({ className }) => {
  return (
    <Box my={"80px"}>
      <Container maxW={"container.xl"}>
        <Box borderRadius={"20px"} p={"25px 40px"}>
          <Text fontSize={"2xl"}>
            (Das Produkt ist zur Entfernung von organischen Flecken wie Fett,
            Lebensmittel- und Getränkerückständen, Schweiß, Gras und
            Beerenflecken auf weißen und farbigen Stoffen, Rückständen auf
            Geschirr und Flecken von Polstermöbeln konzipiert. Es beseitigt auch
            unangenehme Gerüche. Der Aktivsauerstoffreiniger ist nicht zur
            Entfernung von Rost, Farbe, Weißölen und Kalkablagerungen sowie
            Seifenschaum geeignet. Das Produkt hinterlässt keine Streifen und
            andere Rückstände, wenn es richtig verwendet wird. Es wird nicht
            empfohlen, das Produkt auf Membranstoffen, Leder, Wildleder,
            Nubukleder, Wolle, Pelz, Flaum, Federstoffen, Seide, Holz,
            antihaftbeschichtetem Kochgeschirr oder Gegenständen aus Aluminium
            und Kupfer sowie Legierungen dieser Materialien zu verwenden.
            Befolgen Sie die Waschanweisungen auf den Etiketten Ihrer
            Kleidungsstücke. Für Stoffe oder Oberflächen mit instabilen
            Farbstoffen wird empfohlen, die Lösung zunächst an einer kleinen,
            unauffälligen Stelle zu testen. Nicht auf polierten, lackierten,
            verchromten und bemalten Oberflächen anwenden. Nicht mit
            Chlorbleichen mischen.).
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
