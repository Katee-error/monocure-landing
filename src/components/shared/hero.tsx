import { Box, Container } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const Hero: React.FC = ({}) => {
  return (
    <Box pt={["30px", "10px"]} pb={["40px", "80px"]}>
      <Container
        maxW={"container.xl"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Image
            src={"/assets/pack.webp"}
            alt={"pack"}
            width={700}
            height={600}
            priority={true}
          />
        </Box>
        <Box ml={-500} zIndex="-1" display={["none", "block"]}>
          <Image
            src={"/assets/pack-back.png"}
            alt={"another pack"}
            width={700}
            height={600}
            priority={true}
          />
        </Box>
      </Container>
    </Box>
  );
};
