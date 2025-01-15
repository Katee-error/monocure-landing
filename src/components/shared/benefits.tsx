import { Box, Card, CardBody, Container, Grid, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';

interface Props {
  className?: string;
}

export const Benefits: React.FC<Props> = ({ className }) => {
  return (
   <Box py={'60px'}>
    <Container maxW={'container.xl'}>
      <Heading fontSize={'6xl'} fontWeight={500} >
      Hauptvorteile
      </Heading>
      <Grid >
        <Card>
          <CardBody>
            
          </CardBody>
        </Card>
      </Grid>
    </Container>
   </Box>
  );
};