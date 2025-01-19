"use client";
import { Slide, Box, Text, Link, Button, IconButton } from "@chakra-ui/react";
import { X } from "lucide-react";
import { useState } from "react";

export const CookieBanner: React.FC = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleAcceptCookies = () => {
    setIsBannerVisible(false);
  };

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <Slide direction="bottom" in={isBannerVisible} style={{ zIndex: 1000 }}>
      <Box
        bg="white"
        color="black"
        p={6}
        textAlign="start"
        w={"30%"}
        position="relative"
        shadow="lg"
        border="1px solid #e2e8f0"
        borderRadius="md"
      >
        {/* Кнопка закрытия */}
        <IconButton
          aria-label="Close banner"
          icon={<X />}
          size="sm"
          position="absolute"
          top="8px"
          right="8px"
          onClick={handleCloseBanner}
          variant="ghost"
          color={"black"}
        />

        <Text fontSize="sm" mb={2}>
          Wir verwenden Cookies, um die Benutzererfahrung zu verbessern. Mehr
          darüber erfahren Sie in unserer{" "}
          <Link href="/cookie-policy" textDecoration="underline">
            Cookie-Richtlinie
          </Link>
          .
        </Text>
        <Box display="flex" justifyContent="flex-end">
          <Button
            size="sm"
            borderRadius={'40px'}
            fontSize={'xs'}
            bgColor={'#0F89D3'}
            onClick={handleAcceptCookies}
          >
            Ich akzeptiere
          </Button>
        </Box>
      </Box>
    </Slide>
  );
};
