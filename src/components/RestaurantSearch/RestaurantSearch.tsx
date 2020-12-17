import {
  Box,
  Text,
  Center,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import * as React from 'react';
import { ReviewInfo } from '../../pages/reviews';
import { RestuarantCard } from '../RestuarantCard/RestuarantCard';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';

interface RestaurantSearchProps {
  reviews: ReviewInfo[];
}

export const RestaurantSearch = ({ reviews }: RestaurantSearchProps) => {
  const [searchText, setSearchText] = React.useState('');

  const reviewsToDisplay = reviews
    .filter((review) => {
      return searchText !== ''
        ? review.name.toLowerCase().includes(searchText)
        : true;
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((review) => {
      return <RestuarantCard key={review.id} reviewInfo={review} />;
    });

  return (
    <>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={MdSearch} color="gray.300" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          isInvalid={!!!reviewsToDisplay.length}
          onChange={(e) => setSearchText(e.currentTarget.value.toLowerCase())}
        />
      </InputGroup>
      <Box paddingY={2}>
        <Flex
          flexWrap="wrap"
          justifyContent={{
            base: 'center',
            sm: 'center',
            md: 'center',
            lg: 'space-between',
            xl: 'space-between',
          }}
        >
          {reviewsToDisplay.length ? (
            reviewsToDisplay
          ) : (
            <Flex
              justifyContent="center"
              alignItems="center"
              minHeight={'366px'}
              width={'100%'}
            >
              <Box>
                <Center>
                  <Text fontSize={'lg'}>No Bangers and Mash found</Text>
                </Center>
                <Center>
                  <Text>Try refining your search</Text>
                </Center>
              </Box>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
};
