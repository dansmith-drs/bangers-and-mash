import * as React from "react";
import GoogleMapReact from "google-map-react";
import { ReviewInfo } from "../../pages/reviews";
import { ReviewMarker } from "../Marker";

interface ReviewMapProps {
  reviews: ReviewInfo[];
  selectedReview: string | null;
  setSelectedReview: (id: string) => void;
}
const HAZLEMERE = {
  lat: 51.64751388812557,
  lng: -0.7159076956570684,
};

export const ReviewMap = ({
  reviews,
  selectedReview,
  setSelectedReview,
}: ReviewMapProps) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMapReact
        //   bootstrapURLKeys={{ key: "asd" /* YOUR KEY HERE */ }}
        defaultCenter={HAZLEMERE}
        defaultZoom={15}
      >
        {reviews.map((review) => (
          <ReviewMarker
            key={review.id}
            lat={review.latitude}
            lng={review.longitude}
            review={review}
            selectedReview={selectedReview}
            setSelectedReview={setSelectedReview}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};
