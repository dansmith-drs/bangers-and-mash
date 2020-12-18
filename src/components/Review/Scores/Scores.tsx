import { Box, Flex, StatGroup } from '@chakra-ui/react';
import * as React from 'react';
import { Score } from './Score';

interface ScoreProps {
  scores: ScoreInfo[];
}

export interface ScoreInfo {
  name: string;
  score: number;
}

export const Scores = ({ scores }: ScoreProps) => {
  return (
    <StatGroup>
      {scores.map((scoreInfo) => (
        <Score name={scoreInfo.name} score={scoreInfo.score} />
      ))}
    </StatGroup>
  );
};
