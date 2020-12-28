import * as React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
} from '@chakra-ui/react';
import { GiKnifeFork } from '@react-icons/all-files/gi/GiKnifeFork';
import { ReviewInfoWithRank } from '../../pages/reviews';
import { HeadlineDetails } from '../RestuarantCard/HeadlineDetails';
import { ReviewButton } from '../ReviewButton/ReviewButton';
import { PigeonProps } from 'pigeon-maps/src/types';

interface ReviewMarkerProps extends PigeonProps {
  review: ReviewInfoWithRank;
  totalReviews: number;
}

export const ReviewMarker = ({
  review,
  left,
  top,
  totalReviews,
}: ReviewMarkerProps) => (
  <Box position="absolute" left={left} top={top}>
    <Popover trigger="click">
      <PopoverTrigger>
        <IconButton
          colorScheme="primary"
          aria-label="View restaurant review"
          icon={<GiKnifeFork />}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <HeadlineDetails
              name={review.name}
              subHeading={review.subHeading}
              websiteUrl={review.websiteUrl}
              rating={review.overallRating}
              rank={review.rank}
              totalReviews={totalReviews}
            />
          </PopoverHeader>
          <PopoverBody>
            <Text paddingTop={2} noOfLines={2} fontSize="sm" isTruncated={true}>
              {review.writtenReview}
            </Text>
            <Box paddingTop={2}>
              <ReviewButton reviewId={review.id} />
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  </Box>
);
