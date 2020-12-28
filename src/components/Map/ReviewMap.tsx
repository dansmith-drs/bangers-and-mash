import * as React from 'react';
import Map from 'pigeon-maps';
import { Box } from '@chakra-ui/react';
import { ReviewInfoWithRank } from '../../pages/reviews';
import { ReviewMarker } from './Marker';

interface ReviewMapProps {
  reviews: ReviewInfoWithRank[];
}
const MAP_CENTRE = {
  lat: 51.66070418731679,
  lng: -0.8959715284727613,
};

const tileProvider = (x, y, z, dpr) => {
  return `https://api.maptiler.com/maps/basic/256/${z}/${x}/${y}${
    dpr >= 2 ? '@2x' : ''
  }.png?key=${process.env.GATSBY_MAP_TILER_KEY}`;
};

export const ReviewMap = ({ reviews }: ReviewMapProps) => {
  return (
    <Box height="100%" width="100%">
      <Map
        defaultCenter={[MAP_CENTRE.lat, MAP_CENTRE.lng]}
        defaultZoom={10}
        provider={tileProvider}
      >
        {reviews.map((review) => (
          <ReviewMarker
            key={review.id}
            anchor={[review.latitude, review.longitude]}
            review={review}
            totalReviews={reviews.length}
          />
        ))}
      </Map>
    </Box>
  );
};
