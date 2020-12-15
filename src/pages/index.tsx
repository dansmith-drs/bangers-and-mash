import { graphql } from "gatsby";
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";

export default function Home({ data }) {
  console.log(data);
  const restaurants = data.allGoogleSpreadsheetMain.edges.map((x) => x.node);

  return (
    <div>
      <Header />
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>{restaurant.name}</div>
      ))}
      {/* <Box p={8}> */}
      <Text fontSize="xl">Hello World</Text>
      {/* </Box> */}
    </div>
  );
}

export const pageQuery = graphql`
  query {
    allGoogleSpreadsheetMain {
      edges {
        node {
          id
          name
          rating
          googleSpreadsheetId
        }
      }
    }
  }
`;
