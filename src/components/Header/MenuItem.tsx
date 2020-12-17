import * as React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';

interface MenuItemProps {
  to: string;
  isLast?: boolean;
  children: React.ReactNode;
}
export const MenuItem = ({ isLast, to, children }: MenuItemProps) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link as={GatsbyLink} to={to}>
        {children}
      </Link>
    </Text>
  );
};
