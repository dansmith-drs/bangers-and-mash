import {
  Box,
  ChakraProvider,
  Flex,
  Icon,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MdClose } from "@react-icons/all-files/md/MdClose";
import { MdMenu } from "@react-icons/all-files/md/MdMenu";
import * as React from "react";
import { MenuItem } from "./MenuItem";

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
      bg={["red.500", "red.500", "transparent", "transparent"]}
      color={["white", "white", "red.700", "red.700"]}
    >
      <Flex align="center">
        <Heading size="md">Bangers and Mash</Heading>
      </Flex>

      <Box
        display={{ base: "block", md: "none" }}
        onClick={() => {
          setShow(!show);
        }}
        cursor="pointer"
      >
        {show ? <Icon as={MdClose} /> : <Icon as={MdMenu} />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
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
