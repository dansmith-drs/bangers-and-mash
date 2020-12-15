import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import * as React from "react";
import { ReviewInfo } from "../../pages/reviews";
import { RestuarantCard } from "../RestuarantCard/RestuarantCard";
import { MdSearch } from "@react-icons/all-files/md/MdSearch";

interface RestaurantSearchProps {
  reviews: ReviewInfo[];
}

export const RestaurantSearch = ({ reviews }: RestaurantSearchProps) => {
  const [searchText, setSearchText] = React.useState("");
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
          onChange={(e) => setSearchText(e.currentTarget.value)}
        />
      </InputGroup>
      <Flex flexWrap="wrap" justifyContent="space-between">
        {reviews
          .filter((review) => {
            return searchText !== "" ? review.name.includes(searchText) : true;
          })
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map((review) => {
            return <RestuarantCard key={review.id} reviewInfo={review} />;
          })}
      </Flex>
    </>
  );
};
