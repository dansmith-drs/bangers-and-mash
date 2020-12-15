import { AspectRatio, Box, Flex } from "@chakra-ui/react";
import { graphql } from "gatsby";
import * as React from "react";
import { Header } from "../components/Header/Header";
import { ReviewMap } from "../components/Map/ReviewMap";
import { Review } from "../components/Review/Review";
import { RestaurantSearch } from "../components/RestaurantSearch/RestaurantSearch";

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
  rating: string;
  googleSpreadsheetId: string;
  latitude: number;
  longitude: number;
}

const ReviewsPage = ({ data }: ReviewsPageProps) => {
  const [selectedReview, setSelectedReview] = React.useState<string | null>(
    null
  );

  const reviews = data.allGoogleSpreadsheetMain.edges.map((x) => x.node);

  const activeReview: ReviewInfo | null = selectedReview
    ? reviews.find((review) => review.id === selectedReview)
    : null;

  return (
    <Flex
      direction="column"
      //   align="center"
      justifyContent="center"
      maxWidth={{
        xl: "1200px",
      }}
      marginLeft="auto"
      marginRight="auto"
    >
      <Header />
      <div style={{ width: "100%" }}>
        <AspectRatio ratio={16 / 9}>
          <ReviewMap
            reviews={reviews}
            selectedReview={selectedReview}
            setSelectedReview={(id) => {
              selectedReview === id
                ? setSelectedReview(null)
                : setSelectedReview(id);
            }}
          />
        </AspectRatio>
      </div>
      <Box marginLeft="1rem" marginRight="1rem">
        {activeReview ? (
          <Review review={activeReview} />
        ) : (
          <>
            <RestaurantSearch reviews={reviews} />
            <div>Nothing selected</div>
          </>
        )}
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
          googleSpreadsheetId
        }
      }
    }
  }
`;
