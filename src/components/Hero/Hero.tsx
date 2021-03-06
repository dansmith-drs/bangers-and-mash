import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  ScaleFade,
  Stack,
  Text,
} from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { MdChevronRight } from '@react-icons/all-files/md/MdChevronRight';
import { FADE_IMAGE_TIMEOUT } from '../../utils/constants';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  ctaLink: string;
  ctaText: string;
}

export const Hero = ({
  title,
  subtitle,
  ctaLink,
  ctaText,
  image,
}: HeroProps) => {
  const [fadeImage, setFadeImage] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setFadeImage(true);
    }, FADE_IMAGE_TIMEOUT);
  });
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="nowrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={['center', 'center', 'left', 'left']}
        >
          {subtitle}
        </Heading>
        <Button
          colorScheme="primary"
          borderRadius="8px"
          py="4"
          px="4"
          lineHeight="1"
          size="md"
          rightIcon={<MdChevronRight />}
          onClick={() => {
            navigate(ctaLink);
          }}
        >
          {ctaText}
        </Button>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        ></Text>
      </Stack>
      <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
        <ScaleFade initialScale={0.9} in={fadeImage}>
          <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
        </ScaleFade>
      </Box>
    </Flex>
  );
};
