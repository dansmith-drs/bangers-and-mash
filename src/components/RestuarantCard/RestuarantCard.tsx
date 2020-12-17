import * as React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { ReviewInfo } from '../../pages/reviews';
import { HeadlineDetails } from './HeadlineDetails';
import { ReviewButton } from '../ReviewButton/ReviewButton';

interface RestuarantCardProps {
  reviewInfo: ReviewInfo;
}

export const RestuarantCard = ({ reviewInfo }: RestuarantCardProps) => {
  return (
    <Flex
      minW={'100px'}
      w={{
        base: '100%',
        sm: '350px',
        md: '220px',
        lg: '290px',
        xl: '350px',
      }}
      marginX="2"
      marginY="2"
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
      boxShadow="md"
      height={'350px'}
      direction="column"
    >
      <Box>
        <Image
          width="100%"
          height="150px"
          objectFit="cover"
          src={
            reviewInfo.mainImageUrl ||
            'https://i2-prod.bathchronicle.co.uk/whats-on/food-drink/article31144.ece/ALTERNATES/s810/pub.jpg'
          }
        />
        <Box p={3}>
          <HeadlineDetails
            name={reviewInfo.name}
            websiteUrl={reviewInfo.websiteUrl}
            rating={reviewInfo.rating}
          />
          <Text paddingTop={2} noOfLines={3} fontSize="sm" isTruncated={true}>
            {reviewInfo.writtenReview}
          </Text>
        </Box>
      </Box>
      <Box p="3">
        <ReviewButton reviewId={reviewInfo.id} />
      </Box>
    </Flex>
  );
};
