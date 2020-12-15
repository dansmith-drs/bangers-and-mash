import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Link,
} from "@chakra-ui/react";
import { GiKnifeFork } from "@react-icons/all-files/gi/GiKnifeFork";
import { Link as GatsbyLink } from "gatsby";
import { ChildComponentProps } from "google-map-react";
import * as React from "react";
import { ReviewInfo } from "../pages/reviews";

interface ReviewMarkerProps extends ChildComponentProps {
  selectedReview: string | null;
  setSelectedReview: (id: string | null) => void;
  review: ReviewInfo;
}

export const ReviewMarker = ({
  selectedReview,
  setSelectedReview,
  review,
}: ReviewMarkerProps) => (
  <>
    <Popover trigger="click">
      <PopoverTrigger>
        <IconButton
          colorScheme={selectedReview === review.id ? "blue" : "gray"}
          aria-label="View restaurant review"
          icon={<GiKnifeFork />}
          onClick={() => setSelectedReview(review.id)}
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>{review.name}</PopoverHeader>
          <PopoverBody>
            {review.rating}
            <Link as={GatsbyLink} to={`/review/${review.id}`}>
              Review
            </Link>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  </>
);
