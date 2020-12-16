import * as React from 'react';
import GoogleMapReact, { MapOptions, Maps } from 'google-map-react';
import { ReviewInfo } from '../../pages/reviews';
import { ReviewMarker } from './Marker';

interface ReviewMapProps {
  reviews: ReviewInfo[];
}
const HAZLEMERE = {
  lat: 51.64751388812557,
  lng: -0.7159076956570684,
};

const createMapOptions = (maps: Maps): MapOptions => {
  return {
    clickableIcons: false,
    fullscreenControl: false,
  };
};

export const ReviewMap = ({ reviews }: ReviewMapProps) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: "asd" /* YOUR KEY HERE */ }}
        defaultCenter={HAZLEMERE}
        defaultZoom={15}
        options={createMapOptions}
      >
        {reviews.map((review) => (
          <ReviewMarker
            key={review.id}
            lat={review.latitude}
            lng={review.longitude}
            review={review}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
