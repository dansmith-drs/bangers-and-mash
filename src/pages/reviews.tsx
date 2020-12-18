import * as React from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ReviewMap } from '../components/Map/ReviewMap';
import { PageWrapper } from '../components/Page/PageWrapper';
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
  overallRating: number;
  googleSpreadsheetId: string;
  latitude: number;
  longitude: number;
  websiteUrl: string;
  mainImageUrl: string;
  writtenReview: string;
  fareScore: number;
  serviceScore: number;
  parkingScore: number;
}

const ReviewsPage = ({ data }: ReviewsPageProps) => {
  const [showMap, setShowMap] = React.useState(true);
  const reviews = data.allGoogleSpreadsheetMain.edges.map((x) => x.node);

  return (
    <PageWrapper>
      <Helmet>
        <title>BandM - Reviews</title>
        <meta
          name={`Where you can find all the Bangers and Mash reviews`}
          content={`Reviews`}
        />
      </Helmet>
      <Box style={{ width: '100%' }}>
        <Flex
          justifyContent="flex-end"
          direction={'row'}
          alignItems="flex-end"
          marginRight={2}
          marginBottom={2}
        >
          <Box marginX={8}>
            <FormControl display="flex" alignItems="center">
              <FormLabel htmlFor="show-map" mb="0">
                Show map
              </FormLabel>
              <Switch
                isChecked={showMap}
                onChange={(e) => {
                  setShowMap(e.currentTarget.checked);
                }}
                id="show-map"
              />
            </FormControl>
          </Box>
        </Flex>
        {showMap ? (
          <AspectRatio ratio={21 / 9} marginBottom={4}>
            <ReviewMap reviews={reviews} />
          </AspectRatio>
        ) : null}
      </Box>
      <Box marginX={8}>
        <RestaurantSearch reviews={reviews} />
      </Box>
    </PageWrapper>
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
          overallRating
          latitude
          longitude
          websiteUrl
          mainImageUrl
          writtenReview
          fareScore
          serviceScore
          parkingScore
        }
      }
    }
  }
`;
