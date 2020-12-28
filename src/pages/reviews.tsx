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
import { xor } from 'lodash-es';

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

interface ReviewInfo {
  id: string;
  name: string;
  subHeading: string;
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

export interface ReviewInfoWithRank extends ReviewInfo {
  rank: number;
}

const ReviewsPage = ({ data }: ReviewsPageProps) => {
  const [showMap, setShowMap] = React.useState(true);
  const reviews: ReviewInfoWithRank[] = data.allGoogleSpreadsheetMain.edges
    .sort((a, b) => (a.node.overallRating < b.node.overallRating ? 1 : -1))
    .map((x, i) => ({ ...x.node, rank: i + 1 }));

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
          <AspectRatio ratio={{ base: 21 / 9, md: 21 / 6 }} marginBottom={4}>
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
          subHeading
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
