import { Flex, Heading } from '@chakra-ui/react';
import * as React from 'react';
import { ReviewInfo } from '../../pages/reviews';
import { Scores } from './Scores/Scores';

interface ReviewProps {
  review: ReviewInfo;
}

export const Review = ({ review }: ReviewProps) => {
  return (
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
      {review ? review.id : 'No review'}
    </Flex>
  );

  //   return <div> </div>;
};
