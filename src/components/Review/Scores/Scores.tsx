import {
  StatGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  HStack,
  Box,
} from "@chakra-ui/react";
import * as React from "react";
import { Score } from "./Score";

export const Scores = () => {
  return (
    <>
      <Score name="Parking" score={9} />
      <Score name="Service" score={7} />
      <Score name="Service" score={7} />
      {/* <Score name="Parking" score={9} />
      <Score name="Parking" score={9} />
      <Score name="Service" score={7} />
      <Score name="Service" score={7} />
      <Score name="Parking" score={9} /> */}
    </>
  );
};
