import * as React from 'react';
import { Box, Image, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { graphql, navigate } from 'gatsby';
import { Helmet } from 'react-helmet';
import { ScoreInfo, Scores } from '../components/Scores/Scores';
import { ReviewInfo, ReviewsData } from '../pages/reviews';
import { PageWrapper } from '../components/Page/PageWrapper';
import { HeadlineDetails } from '../components/RestuarantCard/HeadlineDetails';
import { ParagraphNewLine } from '../components/ParagraphNewLine/ParagraphNewLine';
import { MdChevronLeft } from '@react-icons/all-files/md/MdChevronLeft';

interface ReviewTemplateProps {
  data: ReviewsData;
}

export default function ReviewTemplate({ data }: ReviewTemplateProps) {
  // There should only ever be one
  const review = data.allGoogleSpreadsheetMain.edges[0].node as ReviewInfo;

  const capitalize = (s) => {
    if (typeof s !== 'string') return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const scoreColumns = Object.keys(review).filter((key) =>
    key.includes('Score')
  );
  const scoresInfo: ScoreInfo[] = scoreColumns.map((column) => {
    return {
      name: capitalize(column.replace('Score', '')),
      score: review[column],
    };
  });

  return (
    <>
      <Helmet>
        <title>BM - {review.name}</title>
        <meta
          name="description"
          content="The home of Bangers and Mash reviews"
        />
      </Helmet>
      <PageWrapper>
        <Box marginX={8}>
          <Button
            leftIcon={<MdChevronLeft />}
            colorScheme="primary"
            variant="outline"
            marginBottom={4}
            size="sm"
            onClick={() => navigate('/reviews')}
          >
            Back
          </Button>
          <HeadlineDetails
            name={review.name}
            nameSize={'lg'}
            rating={review.overallRating}
            websiteUrl={review.websiteUrl}
          />
          <Box paddingTop={4}>
            <Scores scores={scoresInfo} />
          </Box>
          <Flex
            alignItems="start"
            justify={{
              base: 'center',
              md: 'space-around',
              xl: 'space-between',
            }}
            direction={{ base: 'column', md: 'row' }}
            wrap="nowrap"
            px={8}
            mb={16}
            mt={12}
          >
            <Box width={{ base: '100%', md: '50%' }}>
              <Heading size="md">Review</Heading>
              <Text marginBottom={4} color="gray.600" fontSize={'sm'}>
                {new Date(review.reviewDate).toDateString()}
              </Text>
              <ParagraphNewLine text={review.writtenReview} />
            </Box>
            <Box
              width={{ base: '100%', md: '50%' }}
              marginY={12}
              marginLeft={{ base: 0, md: 8 }}
            >
              <Image
                src={review.mainImageUrl}
                size="100%"
                rounded="1rem"
                shadow="2xl"
              />
            </Box>
          </Flex>
        </Box>
      </PageWrapper>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    allGoogleSpreadsheetMain(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          googleSpreadsheetId
          id
          latitude
          longitude
          mainImageUrl
          name
          websiteUrl
          writtenReview
          reviewDate
          overallRating
          fareScore
          parkingScore
          ambienceScore
          serviceScore
        }
      }
    }
  }
`;
