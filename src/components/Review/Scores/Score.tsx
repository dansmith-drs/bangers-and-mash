import * as React from 'react';
import { Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';

interface ScoreProps {
  score: number;
  name: string;
  total?: number;
}

export const Score = ({ score, name, total = 10 }: ScoreProps) => {
  return (
    <Stat>
      <StatLabel>{name}</StatLabel>
      <StatNumber>{score}</StatNumber>
      <StatHelpText>out of {total}</StatHelpText>
    </Stat>
  );
};
