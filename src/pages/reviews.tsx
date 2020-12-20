import * as React from 'react';
import {
  AspectRatio,
  Box,
  Flex,
  Switch,
  FormControl,
  FormLabel,
  Collapse,
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
  googleSpreadsheetId: string;
  latitude: number;
  longitude: number;
  websiteUrl: string;
  mainImageUrl: string;
  writtenReview: string;
  reviewDate: string;
  overallRating: number;
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
          name="description"
          content="The home of Bangers and Mash reviews"
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
        <Collapse in={showMap} animateOpacity>
          <AspectRatio ratio={21 / 9} marginBottom={4}>
            <ReviewMap reviews={reviews} />
          </AspectRatio>
        </Collapse>
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
