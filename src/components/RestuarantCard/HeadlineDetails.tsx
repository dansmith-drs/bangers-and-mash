import * as React from 'react';
import { Heading, Link, HStack, Text } from '@chakra-ui/react';
import { StarRating } from '../StarRating/StarRating';

interface HeadlineDetailsProps {
  websiteUrl: string;
  name: string;
  rating: number;
  nameSize?: string;
}

export const HeadlineDetails = ({
  websiteUrl,
  name,
  rating,
}: HeadlineDetailsProps) => {
  return (
    <>
      <Heading size="lg" isTruncated={true} noOfLines={2}>
        {name}
      </Heading>
      <Link fontSize="xs" color="gray.600" href={websiteUrl} isExternal={true}>
        <Text isTruncated={true}>{websiteUrl}</Text>
      </Link>
      <StarRating rating={rating} total={10} />
    </>
  );
};
