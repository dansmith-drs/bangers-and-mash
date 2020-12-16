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
      <Heading size="lg" isTruncated={true}>
        <Link href={websiteUrl} isExternal>
          <HStack>
            <span>{name}</span>
            <MdLaunch />
          </HStack>
        </Link>
      </Heading>
      <StarRating rating={rating} total={10} />
    </>
  );
};
