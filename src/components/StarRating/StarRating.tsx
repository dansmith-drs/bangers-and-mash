import * as React from 'react';
import { MdStar } from '@react-icons/all-files/md/MdStar';
import { MdStarHalf } from '@react-icons/all-files/md/MdStarHalf';
import { MdStarBorder } from '@react-icons/all-files/md/MdStarBorder';
import { HStack } from '@chakra-ui/react';

interface StarRatingProps {
  rating: number;
  total: number;
}

export const StarRating = ({ rating, total }: StarRatingProps) => {
  if (rating > total) {
    throw new Error('Rating can not be more than the highest possible rating');
  }
  const fullStars = [];
  const halfStar = rating % 1 > 0 ? [<MdStarHalf key="halfStar" />] : [];
  const emptyStars = [];

  for (let index = 0; index < Math.floor(rating); index++) {
    fullStars.push(<MdStar key={`fullStar-${index}`} />);
  }

  for (
    let index = 0;
    index < Math.floor(total - fullStars.length - halfStar.length);
    index++
  ) {
    emptyStars.push(<MdStarBorder key={`borderStar-${index}`} />);
  }

  const allStars = fullStars.concat(halfStar, emptyStars);

  return <HStack spacing="0px">{allStars}</HStack>;
};
