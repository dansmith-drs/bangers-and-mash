import { graphql } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '../components/Header/Header';

export default function Home({ data }) {
  const restaurants = data.allGoogleSpreadsheetMain.edges.map((x) => x.node);

  return (
    <div>
      <Helmet>
        <title>Bangers and Mash</title>
        <meta
          name="The home of Bangers and Mash reviews"
          content="Bangers and Mash"
        />
      </Helmet>
      <Header />
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>{restaurant.name}</div>
      ))}
    </div>
  );
}

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
