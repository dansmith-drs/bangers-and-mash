import * as React from 'react';
import {
  Flex,
  Heading,
  Text,
  Image,
  Center,
  Container,
} from '@chakra-ui/react';
import { PageWrapper } from '../components/Page/PageWrapper';

const About = () => {
  return (
    <PageWrapper>
      <Flex margin={8} direction={'column'}>
        <Container>
          <Heading>About</Heading>
          <Text mt={8}>
            Kevin and Roger are passionate about <b>Bangers and Mash.</b> Who
            isn't?! Here you can find their adventures to the greatest and less
            great <b>Bangers and Mash</b> establishment in the Buckinghamshire
            region.
          </Text>
        </Container>
        <Center marginTop={8}>
          <Image
            boxSize={{ base: 'xs', md: 'md' }}
            objectFit="cover"
            alt="Bangers and Mash duo"
            src={
              'https://images.unsplash.com/photo-1578004625969-a35f2d58c3d1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80'
            }
          ></Image>
        </Center>
      </Flex>
    </PageWrapper>
  );
};

export default About;
