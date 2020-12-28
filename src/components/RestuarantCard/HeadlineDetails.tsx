import * as React from 'react';
import { Heading, HStack, Link, Text } from '@chakra-ui/react';
import { StarRating } from '../StarRating/StarRating';

interface HeadlineDetailsProps {
  websiteUrl: string;
  name: string;
  subHeading: string;
  rating: number;
  rank: number;
  totalReviews: number;
  nameSize?: string;
}

export const HeadlineDetails = ({
  websiteUrl,
  name,
  rating,
  subHeading,
  rank,
  totalReviews,
}: HeadlineDetailsProps) => {
  return (
    <>
      <Heading size="lg" isTruncated={true} noOfLines={2}>
        {name}
      </Heading>
      <Text color="gray.600" isTruncated={true}>
        {subHeading}
      </Text>
      {websiteUrl ? (
        <Link
          fontSize="xs"
          color="gray.600"
          href={websiteUrl}
          isExternal={true}
        >
          <Text isTruncated={true}>{websiteUrl}</Text>
        </Link>
      ) : (
        <Text fontSize="xs" color="gray.600" isTruncated={true}>
          No website
        </Text>
      )}
      <StarRating rating={rating} total={10} />
      <HStack>
        <Text fontSize="sm" fontWeight={700} color="gray.700">
          #{rank}
        </Text>
        <Text fontSize="sm" color="gray.700">
          of {totalReviews}
        </Text>
      </HStack>
    </>
  );
};
