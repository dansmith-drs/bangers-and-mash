import { Box, Heading, Link } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import * as React from "react";
import { ReviewInfo } from "../../pages/reviews";

interface RestuarantCardProps {
  reviewInfo: ReviewInfo;
}

export const RestuarantCard = ({ reviewInfo }: RestuarantCardProps) => {
  return (
    <Box
      width="xs"
      maxW="xs"
      marginLeft="2"
      marginY="2"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Heading>{reviewInfo.name}</Heading>
      {reviewInfo.rating}
      <Link as={GatsbyLink} to={`/review/${reviewInfo.id}`}>
        Review
      </Link>
    </Box>
  );
};
