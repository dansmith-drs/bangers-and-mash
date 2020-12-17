import * as React from 'react';
import { Box, Flex, Icon, Heading } from '@chakra-ui/react';
import { MdClose } from '@react-icons/all-files/md/MdClose';
import { MdMenu } from '@react-icons/all-files/md/MdMenu';
import { MenuItem } from './MenuItem';

export const Header = () => {
  const [show, setShow] = React.useState(false);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
    >
      <Flex align="center">
        <Heading size="md">Bangers and Mash</Heading>
      </Flex>

      <Box
        display={{ base: 'block', md: 'none' }}
        onClick={() => {
          setShow(!show);
        }}
        cursor="pointer"
      >
        {show ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'center', 'flex-end', 'flex-end']}
          direction={['column', 'column', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/reviews/">Reviews</MenuItem>
          <MenuItem to="/landing/">Landing</MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};
