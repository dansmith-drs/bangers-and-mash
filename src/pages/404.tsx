import * as React from 'react';
import { Heading, Text, Flex, Button } from '@chakra-ui/react';
import { navigate } from 'gatsby';
import { FaRegSadCry } from '@react-icons/all-files/fa/FaRegSadCry';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>BM - Not Found</title>
        <meta
          name="description"
          content="The home of Bangers and Mash reviews"
        />
      </Helmet>
      <FaRegSadCry size={200} />
      <Heading paddingTop={8}>404</Heading>
      <Text>No Bangers and Mash here</Text>
      <Button
        pt={8}
        colorScheme="primary"
        variant="link"
        onClick={() => {
          navigate('/');
        }}
      >
        Take me home
      </Button>
    </Flex>
  );
};

export default NotFound;
