import * as React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface PageWrapperProps {
  children: React.ReactNode;
}
export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <>
      <Helmet>
        <title>Bangers and Mash</title>
        <meta
          name="The home of Bangers and Mash reviews"
          content="Bangers and Mash"
        />
      </Helmet>
      <Flex
        minHeight="100vh"
        flexDirection={'column'}
        justifyContent="center"
        maxWidth={{
          xl: '1200px',
        }}
        marginLeft="auto"
        marginRight="auto"
      >
        <Header />
        <Box flexGrow={1}>{children}</Box>
        <Footer />
      </Flex>
    </>
  );
};
