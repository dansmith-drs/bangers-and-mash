import * as React from 'react';
import { Hero } from '../components/Hero/Hero';
import { PageWrapper } from '../components/Page/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <Hero
        title="Bangers and Mash"
        subtitle="A tradition to be preserved. Kevin and Roger bring you their reviews for Bangers and Mash from pubs visited in Buckinghamshire and the surrounding counties."
        ctaText="Show me the Reviews"
        ctaLink="/reviews"
        image="https://www.daringgourmet.com/wp-content/uploads/2019/09/Bangers-and-Mash-3-square-2.jpg"
      />
    </PageWrapper>
  );
}
