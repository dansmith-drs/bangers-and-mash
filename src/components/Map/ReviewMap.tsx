import * as React from 'react';
import Map from 'pigeon-maps';
import { Box } from '@chakra-ui/react';
import { ReviewInfo } from '../../pages/reviews';
import { ReviewMarker } from './Marker';

interface ReviewMapProps {
  reviews: ReviewInfo[];
}
const HAZLEMERE = {
  lat: 51.64751388812557,
  lng: -0.7159076956570684,
};

const tileProvider = (x, y, z, dpr) => {
  return `https://api.maptiler.com/maps/basic/256/${z}/${x}/${y}${
    dpr >= 2 ? '@2x' : ''
  }.png?key=${process.env.MAP_TILER_KEY}`;
};

export const ReviewMap = ({ reviews }: ReviewMapProps) => {
  return (
    <Box height="100%" width="100%">
      <Map
        defaultCenter={[HAZLEMERE.lat, HAZLEMERE.lng]}
        defaultZoom={15}
        provider={tileProvider}
      >
        {reviews.map((review) => (
          <ReviewMarker
            key={review.id}
            anchor={[review.latitude, review.longitude]}
            review={review}
          />
        ))}
      </Map>
    </Box>
  );
};
