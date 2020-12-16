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
import { ChildComponentProps } from 'google-map-react';
import { ReviewInfo } from '../../pages/reviews';
import { HeadlineDetails } from '../RestuarantCard/HeadlineDetails';
import { ReviewButton } from '../ReviewButton/ReviewButton';

interface ReviewMarkerProps extends ChildComponentProps {
  review: ReviewInfo;
}

export const ReviewMarker = ({ review }: ReviewMarkerProps) => (
  <>
    <Popover trigger="click">
      <PopoverTrigger>
        <IconButton
          colorScheme="gray"
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
              websiteUrl={review.websiteUrl}
              rating={review.rating}
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
  </>
);
