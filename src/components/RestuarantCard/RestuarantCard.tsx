import * as React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { ReviewInfoWithRank } from '../../pages/reviews';
import { HeadlineDetails } from './HeadlineDetails';
import { ReviewButton } from '../ReviewButton/ReviewButton';
import { navigate } from 'gatsby';

interface RestuarantCardProps {
  reviewInfo: ReviewInfoWithRank;
  totalReviews: number;
}

export const RestuarantCard = ({
  reviewInfo,
  totalReviews,
}: RestuarantCardProps) => {
  return (
    <Flex
      minW={'100px'}
      w={{
        base: '100%',
        sm: '350px',
        md: '290px',
        lg: '290px',
        xl: '350px',
      }}
      margin={2}
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
      boxShadow="md"
      height={'450px'}
      direction="column"
      justifyContent="space-between"
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
          cursor="pointer"
          onClick={() => {
            navigate(`/review/${reviewInfo.id}`);
          }}
        />
        <Box p={3}>
          <HeadlineDetails
            name={reviewInfo.name}
            subHeading={reviewInfo.subHeading}
            websiteUrl={reviewInfo.websiteUrl}
            rating={reviewInfo.overallRating}
            rank={reviewInfo.rank}
            totalReviews={totalReviews}
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
