import * as React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header/Header';
import { Scores } from '../components/Review/Scores/Scores';
import { ReviewInfo, ReviewsData } from '../pages/reviews';

interface ReviewTemplateProps {
  data: ReviewsData;
}

export default function ReviewTemplate({ data }: ReviewTemplateProps) {
  // There should only ever be one
  const review = data.allGoogleSpreadsheetMain.edges[0].node as ReviewInfo;

  return (
    <>
      <Helmet>
        <title>BandM - {review.name}</title>
        <meta
          name={`Review for ${review.name}`}
          content={`Review ${review.name}`}
        />
      </Helmet>
      <Header />
      <Flex direction="column">
        <Heading paddingBottom={1}>{review.name}</Heading>

        <Flex direction="row" justifyContent="flex-start">
          <Scores />
        </Flex>
        {review ? review.id : 'No review'}
      </Flex>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    allGoogleSpreadsheetMain(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          googleSpreadsheetId
          name
          rating
          id
        }
      }
    }
  }
`;
