import React from "react";
import { Box, Image } from "@chakra-ui/react";


interface Props {
  className?: string;
}

export const Use: React.FC<Props> = ({ className }) => {
  return (
    <Box h={'800px'} py={'60px'}>
      <Image src={'/assets/gallery/use.png'} alt={""} width={'100%'} h={'100%'} objectFit={'contain'}/>
    </Box>
  );
};
