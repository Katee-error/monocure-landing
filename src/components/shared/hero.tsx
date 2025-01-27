"use client";
import {
  Box,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const MotionBox = motion(Box); 
export const Hero: React.FC = ({}) => {
  return (
    <Box pt={["30px", "10px"]} pb={["40px", "80px"]}>
      <Container
        maxW={"container.xl"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
     <MotionBox
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
      >
          <Image
            src={"/assets/pack.webp"}
            alt={"pack"}
            width={700}
            height={600}
          />
        </MotionBox>
        <MotionBox
        initial={{ opacity: 0, x: 50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.5 }} 
        ml={-500} 
        zIndex='-1'
        display={['none', 'block']}
      >
          <Image
            src={"/assets/pack-back.png"}
            alt={"another pack"}
            width={700}
            height={600}
          />
        </MotionBox>
      </Container>
    </Box>
  );
};
