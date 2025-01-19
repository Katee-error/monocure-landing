import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import React, { JSX } from "react";
export default function CookiePolicy(): JSX.Element {
  return (
    <Box p={8}>
      <Container maxW={"container.xl"}>
        <Heading as="h1" mb={4}>
          Hinweis zur Verwendung von Cookies und ähnlichen Technologien
        </Heading>
        <Text mb={4}>
          Wir verwenden Cookies, um den Datenverkehr zu analysieren, Inhalte und
          Werbung auf Sie abzustimmen und Ihnen die Möglichkeit zu geben,
          Informationen in sozialen Netzwerken zu teilen. Wir geben
          Informationen über Ihre Aktivitäten auf der Website in anonymisierter
          Form an unsere Partner weiter: soziale Netzwerke sowie Unternehmen,
          die sich mit Werbung und Webanalyse beschäftigen. Unsere Partner
          können diese Daten mit den Informationen kombinieren, die Sie ihnen
          zur Verfügung gestellt haben, sowie mit Daten, die sie während der
          Nutzung ihrer Dienste erhalten haben. Indem Sie diese Website
          weiterhin nutzen, bestätigen Sie Ihr Einverständnis mit der Verwendung
          von Cookies gemäß dieser Mitteilung.
        </Text>
        <VStack spacing={4}>
          <Box>
            <Heading as="h2" fontSize={"2xl"} mb={4}>
              Was sind Cookies?
            </Heading>
            <Text mb={4}>
              Ein Cookie ist ein kleiner Textabschnitt, der vom Browser von der
              Website, die Sie besucht haben, übertragen wird. Er hilft der
              Website, Informationen über Sie zu speichern, wie zum Beispiel Ihre
              bevorzugte Sprache. Dies ist bei Ihrem nächsten Besuch derselben
              Website nützlich. Dank Cookies wird das Surfen im Internet deutlich
              komfortabler. Cookies werden für viele Zwecke verwendet. Sie helfen
              dabei, SafeSearch-Einstellungen zu speichern, relevante Anzeigen
              anzuzeigen, Seitenaufrufe zu zählen, sich bei unseren Diensten zu
              registrieren und Benutzerdaten zu schützen.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" fontSize={"2xl"} mb={4}>
              Auf unserer Website werden verschiedene Arten von Cookies verwendet:
            </Heading>
            <UnorderedList>
              <ListItem mb={4}>
                <Heading fontSize={'xl'}>Unbedingt notwendige Cookies</Heading>{" "}
                <Text>
                  Diese Cookies sind notwendig, damit die Website ordnungsgemäß
                  funktioniert. Sie ermöglichen die Navigation auf der Website.
                  Diese Cookies identifizieren Sie nicht als Person. Wenn Sie
                  diese Art von Cookies ablehnen, kann dies die Leistung der
                  Website oder einzelner Komponenten beeinträchtigen.
                </Text>
              </ListItem>
              <ListItem mb={4}>
                <Heading fontSize={'xl'}>Leistungs-, Effizienz- und Analyse-Cookies</Heading>{" "}
                <Text>
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit der
                  Website interagieren, indem sie Informationen über die besuchten
                  Bereiche und die auf der Website verbrachte Zeit bereitstellen.
                  Sie zeigen auch Probleme wie Fehlermeldungen auf. Dies hilft,
                  die Leistung der Website zu verbessern. Analyse-Cookies helfen
                  zudem, die Wirksamkeit von Werbekampagnen zu messen und die
                  Inhalte von Websites für diejenigen zu optimieren, die sich für
                  unsere Werbung interessieren. Diese Cookies können nicht
                  verwendet werden, um Sie zu identifizieren. Alle gesammelten und
                  analysierten Informationen sind anonym.
                </Text>
              </ListItem>
              <ListItem mb={4}>
                <Heading fontSize={'xl'}>Funktionale Cookies</Heading>{" "}
                <Text>
                  Diese Cookies dienen dazu, Benutzer zu erkennen, die auf unsere
                  Website zurückkehren. Sie ermöglichen es uns, Inhalte
                  individuell auf Sie abzustimmen und Ihre Vorlieben zu speichern.
                  Wenn Sie diese Cookies deaktivieren, kann dies die Leistung und
                  Funktionalität der Website beeinträchtigen und den Zugriff auf
                  Inhalte einschränken.
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <Heading as="h2" fontSize={"2xl"} mb={4}>
              Wie lange werden Cookies auf Ihrem Gerät gespeichert?
            </Heading>
            <Text mb={4}>
              Einige Cookies sind nur für die Dauer Ihres Besuchs auf der Website
              aktiv. Sobald Sie den Browser schließen, werden diese Cookies
              automatisch gelöscht. Solche Cookies werden als „Sitzungscookies“
              bezeichnet. Einige Cookies bleiben auch zwischen Browsersitzungen
              auf Ihrem Gerät gespeichert – sie werden nicht gelöscht, wenn Sie
              den Browser schließen. Solche Cookies werden als „dauerhafte
              Cookies“ bezeichnet. Die Speicherdauer dieser Cookies variiert je
              nach Typ.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" fontSize={"2xl"} mb={4}>
              Wer speichert Cookies auf Ihrem Gerät?
            </Heading>
            <Text mb={4}>
              Cookies können von der Websiteverwaltung auf Ihrem Gerät gespeichert
              werden. Diese Cookies werden als „Erstanbieter-Cookies“ bezeichnet.
              Einige Cookies können von anderen Anbietern auf Ihrem Gerät
              gespeichert werden. Solche Cookies werden als
              „Drittanbieter-Cookies“ bezeichnet.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" fontSize={"2xl"} mb={4}>
              Wie können Sie Cookies verwalten?
            </Heading>
            <Text mb={4}>
              Die meisten Internetbrowser sind standardmäßig so eingestellt, dass
              Cookies automatisch akzeptiert werden. Sie können die Einstellungen
              jedoch so ändern, dass Cookies blockiert oder eine Warnung angezeigt
              wird, wenn diese Dateien auf Ihr Gerät übertragen werden. Es gibt
              verschiedene Möglichkeiten, Cookies zu verwalten. Lesen Sie die
              Anleitung Ihres Browsers, um mehr darüber zu erfahren, wie Sie die
              Einstellungen anpassen können. Wenn Sie Cookies deaktivieren, kann
              dies Ihr Interneterlebnis beeinträchtigen.
            </Text>
          </Box>
          <Box>
            <Heading as="h2" fontSize={"2xl"} mb={4}>
              Cookies und persönliche Daten
            </Heading>
            <Text mb={4}>
              Cookies enthalten keine persönlichen Daten, die zur Identifizierung
              Ihrer Person verwendet werden können. Sie enthalten keine Namen,
              E-Mail-Adressen, Wohnadressen, Telefonnummern oder andere ähnliche
              Daten.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
