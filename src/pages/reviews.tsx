import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header/Header';
import { ReviewMap } from '../components/Map/ReviewMap';
import { RestaurantSearch } from '../components/RestaurantSearch/RestaurantSearch';

interface ReviewsPageProps {
  data: ReviewsData;
}

export interface ReviewsData {
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
    <>
      <Helmet>
        <title>BandM - Reviews</title>
        <meta
          name={`Where you can find all the Bangers and Mash reviews`}
          content={`Reviews`}
        />
      </Helmet>
      <Flex
        direction="column"
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
    </>
  );
};

export default ReviewsPage;

export const pageQuery = graphql`
  query {
    allGoogleSpreadsheetMain {
      edges {
        node {
          id
          googleSpreadsheetId
          name
          rating
          latitude
          longitude
          websiteUrl
          mainImageUrl
          reviewer
          writtenReview
        }
      }
    }
  }
`;
