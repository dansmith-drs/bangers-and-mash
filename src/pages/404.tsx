import * as React from 'react';
import { Heading, Text, Flex } from '@chakra-ui/react';
import { FaRegSadCry } from '@react-icons/all-files/fa/FaRegSadCry';

export const NotFound = () => {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      marginLeft="auto"
      marginRight="auto"
    >
      <FaRegSadCry size={200} />
      <Heading paddingTop={8}>404</Heading>
      <Text>No Bangers and Mash here</Text>
    </Flex>
  );
};

export default NotFound;
