import {
  Box,
  Text,
  Center,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Fade,
} from '@chakra-ui/react';
import * as React from 'react';
import { ReviewInfo } from '../../pages/reviews';
import { RestuarantCard } from '../RestuarantCard/RestuarantCard';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import debounce from 'lodash-es/debounce';
import { DEBOUNCE_TIMEOUT } from '../../utils/constants';

interface RestaurantSearchProps {
  reviews: ReviewInfo[];
}

export const RestaurantSearch = ({ reviews }: RestaurantSearchProps) => {
  const [searchText, setSearchText] = React.useState('');
  const [animateNotFound, setAnimateNotFound] = React.useState(true);

  const handleChange = (e) => {
    setAnimateNotFound(false);
    debounceSearch(e.currentTarget.value.toLowerCase());
  };

  const debounceSearch = React.useCallback(
    debounce((searchValue: string) => {
      setSearchText(searchValue);
      setAnimateNotFound(true);
    }, DEBOUNCE_TIMEOUT),
    []
  );

  const reviewsToDisplay = reviews
    .filter((review) => {
      return searchText !== ''
        ? review.name.toLowerCase().includes(searchText)
        : true;
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((review) => {
      return <RestuarantCard reviewInfo={review} />;
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
          onChange={handleChange}
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
              <Fade in={animateNotFound} unmountOnExit={true}>
                <Box>
                  <Center>
                    <Text fontSize={'lg'}>No Bangers and Mash found</Text>
                  </Center>
                  <Center>
                    <Text>Try refining your search</Text>
                  </Center>
                </Box>
              </Fade>
            </Flex>
          )}
        </Flex>
      </Box>
    </>
  );
};
