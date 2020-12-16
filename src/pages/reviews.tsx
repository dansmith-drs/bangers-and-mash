import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Header } from '../components/Header/Header';
import { ReviewMap } from '../components/Map/ReviewMap';
import { Review } from '../components/Review/Review';
import { RestaurantSearch } from '../components/RestaurantSearch/RestaurantSearch';

interface ReviewsPageProps {
  data: ReviewsData;
}

interface ReviewsData {
  allGoogleSpreadsheetMain: GoogleSpreadsheetMain;
}

interface GoogleSpreadsheetMain {
  edges: {
    node: ReviewInfo;
  }[];
}

export interface ReviewInfo {
  id: string;
  name: string;
  rating: number;
  googleSpreadsheetId: string;
  latitude: number;
  longitude: number;
  reviewer: string;
  websiteUrl: string;
  mainImageUrl: string;
  writtenReview: string;
}

const ReviewsPage = ({ data }: ReviewsPageProps) => {
  const reviews = data.allGoogleSpreadsheetMain.edges.map((x) => x.node);

  return (
    <Flex
      direction="column"
      //   align="center"
      justifyContent="center"
      maxWidth={{
        xl: '1200px',
      }}
      marginLeft="auto"
      marginRight="auto"
    >
      <Header />
      <div style={{ width: '100%' }}>
        <AspectRatio ratio={16 / 9}>
          <ReviewMap reviews={reviews} />
        </AspectRatio>
      </div>
      <Box marginLeft="1rem" marginRight="1rem">
        <RestaurantSearch reviews={reviews} />
      </Box>
    </Flex>
  );
};

export default ReviewsPage;

export const pageQuery = graphql`
  query {
    allGoogleSpreadsheetMain {
      edges {
        node {
          id
          name
          rating
          latitude
          longitude
          websiteUrl
          mainImageUrl
          reviewer
          writtenReview
          googleSpreadsheetId
        }
      }
    }
  }
`;
