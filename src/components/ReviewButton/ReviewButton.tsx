import { Button } from '@chakra-ui/react';
import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';

interface ReviewButtonProps {
  reviewId: string;
}

export const ReviewButton = ({ reviewId }: ReviewButtonProps) => {
  return (
    <Button
      as={GatsbyLink}
      to={`/review/${reviewId}`}
      colorScheme="green"
      size="xs"
    >
      Review
    </Button>
  );
};
