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
  Select,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { ReviewInfoWithRank } from '../../pages/reviews';
import { RestuarantCard } from '../RestuarantCard/RestuarantCard';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import debounce from 'lodash-es/debounce';
import { DEBOUNCE_TIMEOUT } from '../../utils/constants';

interface RestaurantSearchProps {
  reviews: ReviewInfoWithRank[];
}

enum SortDirection {
  AlphaAsc = 'ALPHA_ASC',
  AlphaDesc = 'ALPHA_DESC',
  RankDesc = 'RANK_DESC',
  RankAsc = 'RANK_ASC',
}

export const RestaurantSearch = ({ reviews }: RestaurantSearchProps) => {
  const [searchText, setSearchText] = React.useState('');
  const [animateNotFound, setAnimateNotFound] = React.useState(true);
  const [sortState, setSortState] = React.useState(SortDirection.AlphaDesc);

  const handleSearchChange = (e) => {
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
    .sort((a, b) => {
      if (
        sortState === SortDirection.AlphaAsc ||
        sortState === SortDirection.AlphaDesc
      ) {
        return (
          sortState === SortDirection.AlphaAsc
            ? a.name > b.name
            : a.name < b.name
        )
          ? 1
          : -1;
      }
      if (
        sortState === SortDirection.RankAsc ||
        sortState === SortDirection.RankDesc
      ) {
        return (
          sortState === SortDirection.RankAsc
            ? a.rank < b.rank
            : a.rank > b.rank
        )
          ? 1
          : -1;
      }
    })
    .map((review) => {
      return (
        <RestuarantCard
          key={review.id}
          reviewInfo={review}
          totalReviews={reviews.length}
        />
      );
    });

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<Icon as={MdSearch} color="gray.300" />}
          />
          <Input
            type="text"
            placeholder="Search..."
            isInvalid={!!!reviewsToDisplay.length}
            onChange={handleSearchChange}
          />
        </InputGroup>
        <Select
          size="md"
          value={sortState}
          width={{ base: '100%', md: 'xs' }}
          onChange={(e) => {
            setSortState(e.currentTarget.value as SortDirection);
          }}
        >
          <option value={SortDirection.AlphaAsc}>A-Z</option>
          <option value={SortDirection.AlphaDesc}>Z-A</option>
          <option value={SortDirection.RankDesc}>Best first</option>
          <option value={SortDirection.RankAsc}>Worst first</option>
        </Select>
      </Stack>
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
