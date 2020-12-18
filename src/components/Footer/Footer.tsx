import * as React from 'react';
import { Box, Center, Link, Text } from '@chakra-ui/react';
import { VscGithub } from '@react-icons/all-files/Vsc/VscGithub';

export const Footer = () => {
  return (
    <Box paddingBottom={4}>
      <Center>
        <Text fontSize="xs" marginRight={1} fontWeight={'bold'}>
          Dan Smith
        </Text>
        <Text fontSize="xs" marginRight={1}>
          {' '}
          &copy; {new Date().getFullYear()}
        </Text>
        <Link
          isExternal={true}
          href={'https://github.com/dansmith-drs/bangers-and-mash'}
        >
          <VscGithub />
        </Link>
      </Center>
    </Box>
  );
};
