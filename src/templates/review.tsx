import { Flex, Heading } from "@chakra-ui/react";
import { graphql } from "gatsby";
import * as React from "react";
import { Header } from "../components/Header/Header";
import { Scores } from "../components/Review/Scores/Scores";
import { ReviewInfo } from "../pages/reviews";

export default function ReviewTemplate({ data }) {
  console.log(data);

  const review = data.allGoogleSpreadsheetMain.edges[0].node as ReviewInfo;

  return (
    <>
      <Header />
      <Flex
        direction="column"
        //   align="center"
        //   justifyContent="center"
        //   maxWidth={{
        //     xl: "1200px",
        //   }}
        //   marginLeft="auto"
        //   marginRight="auto"
      >
        <Heading paddingBottom={1}>{review.name}</Heading>

        <Flex
          direction="row"
          // wrap="wrap"
          // maxWidth={{
          //   lg: "500px",
          //   xl: "500px",
          // }}
          // align="center"
          justifyContent="flex-start"
        >
          <Scores />
        </Flex>
        {/* </Center> */}
        {review ? review.id : "No review"}
      </Flex>
    </>
  );
}

// query SlugData($slug: String!) {
//     allGoogleSpreadsheetMain(filter: {fields: {slug: {eq: $slug}}}) {
//       edges {
//         node {
//           googleSpreadsheetId
//           id
//         }
//       }
//     }
//   }
// {
//     "slug": "/review/82c85caa-f60c-5f21-80b5-2069204c72b1"
//   }

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
