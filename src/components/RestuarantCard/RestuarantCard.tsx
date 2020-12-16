import * as React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Button,
  Flex,
  HStack,
} from '@chakra-ui/react';
import { Link as GatsbyLink } from 'gatsby';
import { ReviewInfo } from '../../pages/reviews';
import { StarRating } from '../StarRating/StarRating';
import { MdLaunch } from '@react-icons/all-files/md/MdLaunch';

interface RestuarantCardProps {
  reviewInfo: ReviewInfo;
}

export const RestuarantCard = ({ reviewInfo }: RestuarantCardProps) => {
  return (
    <Flex
      width="xs"
      maxW="xs"
      marginLeft="2"
      marginY="2"
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
      boxShadow="md"
      height={'350px'}
      direction="column"
      justifyContent="space-between"
    >
      <Box>
        <Image
          height="auto"
          width="100%"
          maxHeight="150px"
          objectFit="cover"
          src={
            reviewInfo.mainImageUrl ||
            'https://i2-prod.bathchronicle.co.uk/whats-on/food-drink/article31144.ece/ALTERNATES/s810/pub.jpg'
          }
        />
        <Box p={2}>
          <Heading size="lg" isTruncated={true}>
            <Link href={reviewInfo.websiteUrl} isExternal>
              <HStack>
                <span>{reviewInfo.name}</span>
                <MdLaunch />
              </HStack>
            </Link>
          </Heading>
          <StarRating rating={reviewInfo.rating} total={10} />
          <Text paddingTop={2} noOfLines={3} fontSize="sm" isTruncated={true}>
            {reviewInfo.writtenReview}
          </Text>
        </Box>
        <Box p="2">
          <Button
            as={GatsbyLink}
            to={`/review/${reviewInfo.id}`}
            colorScheme="green"
            size="xs"
          >
            Review
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
