"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  HStack,
  Button,
  Avatar,
  Container,
  Badge,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  className?: string;
}

const testimonials = [
  {
    id: 1,
    name: "Amazon Kunde",
    avatar: "/path-to-avatar1.jpg",
    rating: 5,
    text: "Ich benutze diesen Universalreiniger jetzt seit einigen Wochen und bin sehr zufrieden. Er reinigt fast alles im Haus, von Möbeln bis zum Bad und der Kleidung. Er entfernt alle Arten von Flecken problemlos. Der Duft ist angenehm und nicht zu stark, und es bleiben keine Rückstände oder Streifen zurück. Eine kleine Menge reicht oft schon für größere Flächen.",
  },
  {
    id: 2,
    name: "G. L.",
    avatar: "/path-to-avatar2.jpg",
    rating: 4,
    text: "Warum und wofür, Beschreibung: Geliefert wurden 900g eines speziellen Fleckentferner Pulvers. Made in German ist sympathisch. Sehr einfach anzuwenden: Einfach mit heißem Wasser mischen, und die zu reinigenden Sachen einweichen und gut. Oder zum normalen Waschmittel dazugeben hat auch gut funktioniert. Gefühlt ein klein wenig zu teuer. Persönliche Empfehlung: Ja ✅ - Persönliches P/L Empfingen: 👎🏻Ø Anleitung / Dokumentation: Vorhanden: ✅ | Deutsche Sprache: ✅Informationen auf der Verpackung: ✅| Produkt selbsterklärend: ✅ Infos auf der Produktseite bei Amazon: ✅ Wichtige und nötige Produktdaten abgebildet: ✅(Produktseite, Verpackung oder Produkt) Sterne-Fazit: ⭐⭐⭐⭐ von 5 möglichen Sternen - 12/202  • Rezensiertes Produkt: Monocure Fleckenentferner Kleidung Ich Bin Deine Lösung für Alles, Oxi Action Pulver entfernt Geruch, hartnäckige Flecken Waschkraftverstärker und Weißauffrischung Ohne Chlor, Duftstoffe, 900g • Das Produkt habe ich im Rahmen von Amazon-Vine kostenfrei zum Testen zur Verfügung gestellt bekommen, dies hat aber keinerlei Auswirkung auf meine Bewertung! • Habe genau den Artikel bekommen, den ich angefordert habe. Soweit ich das beurteilen kann, entspricht das Produkt ansonsten den Hersteller-Abbildungen und -Aussagen auf der Produktseite. Das Produkt habe ich im Rahmen von Amazon-Vine kostenfrei zum Testen zur Verfügung gestellt bekommen, dies hat aber keinerlei Auswirkung auf meine Bewertung! • Diese Bewertung bezieht sich nur auf das mir zur Verfügung gestellte Produkt und spiegelt ausschließlich meine persönliche Erfahrung damit wieder. Durch die Bereitstellung wird meine freie Meinung nicht beeinflusst. Es gab auch keine Vorgaben oder Einschränkungen bezüglich des Tests. Höchstpunktzahl vergebe ich nur wenn wirklich alles passt. Einen Stern nur bei Totalausfall. Sollten im Produktlebenszyklus Probleme auftreten, die nicht durch natürliche Alterung, oder über den normalen Verschleiß hinausgehen, werde ich natürlich hier auch updaten und die Bewertung entsprechend korrigieren. Updates: bisher nix 😉",
  },
  {
    id: 3,
    name: "Nanya_Viner",
    avatar: "/path-to-avatar3.jpg",
    rating: 5,
    text: "I recently tried the Monocure Stain Remover 900g to tackle yellow stains on my family’s white shirts and T-shirts. Over time, these stains had become a persistent issue, and many other stain removers I’d used in the past didn’t seem to work effectively. I was hopeful this powder would provide a solution—and it certainly did! Product Overview The Monocure Stain Remover comes in a resealable plastic bag containing 900g of fine white powder. The packaging is practical and easy to store. It also includes a manufacturing date of 21/10/2024, ensuring freshness and longevity 🗓️. This product is chlorine-free and has no strong odours, making it a great option for those who prefer gentler cleaning solutions. It’s designed to work as a pre-wash treatment, requiring you to soak your clothes in a mixture of hot water and the powder before running them through a normal wash cycle. My Experience I tested this stain remover on several white cotton shirts and T-shirts that had stubborn yellowing stains, particularly around the underarms and collars. Following the instructions, I soaked the clothes in hot water mixed with the powder before washing them at 40°C on a normal cycle. After line drying, I was thrilled to see that the yellowing had virtually disappeared! The powder worked exceptionally well as a pre-wash treatment, outperforming other stain removers I’ve used in the past. What’s more, it was easy to use and didn’t require any scrubbing or extra effort. I also appreciated that it didn’t leave any residue or harsh chemical smell on the clothes. Pros and Cons Based on My Experience Pros 🧺 Highly effective at removing yellow stains from white shirts and T-shirts 🌿 Chlorine-free with no strong odours—gentle on fabrics ✨ Easy to use as a pre-wash treatment ✔️ Large 900g pack offers great value for multiple washes 💧 Versatile and works well as an alternative to other stain removers.Cons: 🔥 Requires hot water for soaking, which may not be ideal for all fabrics.Conclusion:The Monocure Stain Remover 900g has proven to be an excellent solution for tackling stubborn yellow stains on white clothing 🌟🧺. It’s easy to use, effective, and offers great value for money with its large pack size. If you’re looking for a reliable stain remover that delivers results without harsh chemicals or strong smells, this is definitely worth trying.",
  },
  {
    id: 4,
    name: "	McDonald",
    avatar: "/path-to-avatar3.jpg",
    rating: 4,
    text: "Der Monocure Fleckenentferner macht seinen Job bei hartnäckigen Flecken und Gerüchen wirklich gut. Die Waschkraftverstärkung und die Weißauffrischung sind spürbar, und ich konnte einen sichtbaren Unterschied bei der Kleidung feststellen. Allerdings ist die Verpackung ein echter Minuspunkt. Die Tüte ist viel zu groß, und es bleibt viel unnötiger Müll übrig. Das sorgt für einen Sternabzug, da die Menge der Verpackung einfach nicht sinnvoll ist. Trotzdem funktioniert das Produkt gut und ist effektiv bei der Fleckenentfernung.",
  },
  {
    id: 5,
    name: "hildemann",
    avatar: "/path-to-avatar3.jpg",
    rating: 5,
    text: "Fleckenentferner in Pulverform zum selber anmischen um eine Lösung herzustellen , hier hat man eine 900 g Packung basierend auf Natriumper carbonat / Natriumcarbonat für mich ist es vom Prinzip und Wirkungsweise wie Soda Pulver , da sind auch die Bestandteile enthalten . Es ist ein gutes kraftvolles Reinigungsmittel , man sollte sich an die Gebrauchsinformation halten und entsprechend auch umgehen bei den Arbeiten . Vom Preis ist es marktüblich und okay was ich damit ganz gerne reinige ist die Waschmaschine im Leerlauf es nimmt alle alten Seifenreste und Schmutz weg gerade an der Gummimischung vom Bullauge / Öffnung oder auch sehr gut beim Geschirrspüler im Selbstreinigung Programm kann ich bestens empfehlen dieses Produkt oder Soda Pulver ich merke hier keinen Unterschied das ist meine persönliche Meinung und Erfahrung .⭐⭐⭐⭐",
  },
  {
    id: 6,
    name: "	theloner 1966",
    avatar: "/path-to-avatar3.jpg",
    rating: 5,
    text: "Dieser Fleckenentferner von Monocure gefällt mir recht gut. Insofern fällt einem bei der Lieferung zunächst einmal auf, dass der Beutel absolut überdimensioniert ist. Sicherlich würde in den Beutel auch die 4-5 fache Menge hinein passen. Warum dies so ist wird wohl für immer das Geheimnis des Herstellers bleiben...Allerdings, und darauf kommt es ja an, ist das Produkt an sich sehr gut. Insofern habe ich das Pulver zunächst für verschmutzte weiße Gardinen verwendet, und das Ergebnis ist fantastisch. Für sonstige Anwendungen außerhalb der Waschmaschine muss man eine kleine Menge Pulver mit Wasser anrühren. In dieser Art habe ich es für die Fugen im Badezimmer verwendet, wobei man dem Mittel natürlich ein wenig Zeit zum Einwirken geben muss. Aber auch im Bad war das Ergebnis richtig gut. Ein sehr guter Fleckenentferner von Monocure, der hält was er verspricht. Von daher meine klare Kaufempfehlung für dieses wirklich gute Produkt!",
  },
  {
    id: 7,
    name: "Julichen",
    avatar: "/path-to-avatar3.jpg",
    rating: 5,
    text: "Als Mama von zwei kleinen Tornados - äh Kindern - bin ich immer auf der Suche nach Produkten, die mir den Alltag erleichtern. Und hey, Monocure? Das ist mein neuer Favorit in Sachen Flecken und Chaos! Warum ich es liebe: Kinder sind Fleckenmagneten. Schokoeis, Gras oder „Kunstwerke“ mit Filzstift - Monocure hat bisher ALLES aus den Klamotten geholt. Einfach in heißem Wasser auflösen, einweichen und voilà - fast wie neu! Keine Chemiebombe. Es ist sanft zu den Kleidern und der Haut meiner Kleinen (und mir!), weil es ohne Chlor oder aggressive Chemikalien auskommt. Mega Pluspunkt! Nicht nur für die Wäsche. Ich habe es im Bad für die Fugen ausprobiert - die sehen jetzt aus, als hätte ich stundenlang geschrubbt. Aber pssst... ich hab’s nur draufgeschüttet und einwirken lassen 😉 . Ein kleiner Wunsch: Die Tüte ist so groß, dass ich schon dachte, ich hätte mich geirrt. Aber der Inhalt ist der Wahnsinn, da verzeihe ich die Übergröße gerne.",
  },
  {
    id: 8,
    name: "Chrisie",
    avatar: "/path-to-avatar3.jpg",
    rating: 5,
    text: "Als jemand, der regelmäßig mit hartnäckigen Flecken zu kämpfen hat, war ich sehr gespannt darauf, den Monocure Fleckenentferner auszuprobieren. Nach einigen Anwendungen kann ich sagen, dass dieses Produkt in meiner Waschroutine einen festen Platz gefunden hat. Anwendung und Vielseitigkeit.Der Fleckenentferner lässt sich problemlos dosieren und sowohl als Vorbehandlung auf hartnäckigen Flecken als auch als Waschkraftverstärker direkt in der Maschine verwenden. Besonders positiv fand ich, dass er für verschiedenste Textilien geeignet ist, ohne die Farben auszubleichen.Ergebnisse bei Fleckenentfernung.Hartnäckige Flecken wie Kaffee, Gras und Rotwein wurden zuverlässig entfernt. Schon nach einer Anwendung waren die Ergebnisse sichtbar. Auch unangenehme Gerüche, etwa in Sportkleidung, verschwinden vollständig, was den Fleckenentferner besonders vielseitig macht.Zusätzlicher Nutzen: Weißauffrischung.Ein großer Pluspunkt ist die Weißauffrischung. Weiße T-Shirts und Bettwäsche wirken nach der Wäsche strahlend sauber, ohne den Einsatz von Chlor. Das macht den Monocure Fleckenentferner sanft zu empfindlichen Stoffen. Besonderheiten• Ohne Chlor und Duftstoffe: Ideal für Menschen mit empfindlicher Haut oder Allergien.• Nachhaltig: Das Pulver ist umweltschonender als viele Alternativen. • 900g Packung: Sehr ergiebig, perfekt für Haushalte mit viel Wäsche.Faziz: Der Monocure Fleckenentferner überzeugt durch seine starke Fleckenbekämpfung, Geruchsneutralisation und die Weißauffrischung – und das alles ohne aggressive Chemikalien. Wer eine effektive, vielseitige und hautfreundliche Lösung sucht, wird hier garantiert fündig!",
  },
];

export const Reviews: React.FC<Props> = ({ className }) => {
  const [expanded, setExpanded] = useState({});
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    // bg={'blue.25'}
    id="section5"
      py={["40px", "60px"]}
      ref={ref}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(50px)"}
      transition="opacity 0.8s ease-out, transform 0.6s ease-out"
    >
      <Container maxW={"container.xl"}>
        <Box textAlign={["center", "start"]}>
          <Badge
            color={"white"}
            bgColor={"#0F89D3"}
            p={"15px"}
            mb={"10px"}
            fontSize={{ base: "xs", md: "sm" }} // Меньший размер шрифта на мобильных
            fontWeight={600}
          >
            #Reviews
          </Badge>
          <Heading textAlign="start" mb="40px">
            Was unsere Kunden sagen
          </Heading>
        </Box>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          style={{
            overflow: isMobile ? "hidden" : "visible",
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <Card
                bg="white"
                borderRadius={"10px"}
                boxShadow="md"
                alignItems={"start"}
              >
                <CardBody>
                  <HStack
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    spacing="5"
                  >
                    <Heading fontSize="md" fontWeight="bold">
                      {testimonial.name}
                    </Heading>
                    <HStack>
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Text key={index} color="blue.600" fontSize="lg">
                          ★
                        </Text>
                      ))}
                    </HStack>
                  </HStack>

                  <Text mt="4" fontSize="sm" color="gray.600">
                    {expanded[testimonial.id]
                      ? testimonial.text
                      : `${testimonial.text.slice(0, 260)}...`}
                  </Text>
                  <Button
                    mt="4"
                    size="sm"
                    textAlign={"start"}
                    color="blue.500"
                    onClick={() => toggleReadMore(testimonial.id)}
                  >
                    {expanded[testimonial.id] ? "Show less" : "Read more"}
                  </Button>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>{" "}
      </Container>
    </Box>
  );
};
