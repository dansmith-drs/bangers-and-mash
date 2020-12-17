import * as React from 'react';
import { MdLaunch } from '@react-icons/all-files/md/MdLaunch';
import { Heading, Link, HStack, Text } from '@chakra-ui/react';
import { StarRating } from '../StarRating/StarRating';

interface HeadlineDetailsProps {
  websiteUrl: string;
  name: string;
  rating: number;
}

export const HeadlineDetails = ({
  websiteUrl,
  name,
  rating,
}: HeadlineDetailsProps) => {
  return (
    <>
      <Heading size="md" isTruncated={true}>
        {name}
      </Heading>
      <Link fontSize="xs" color="gray.600" href={websiteUrl} isExternal={true}>
        <Text isTruncated={true}>{websiteUrl}</Text>
      </Link>
      <StarRating rating={rating} total={10} />
    </>
  );
};
