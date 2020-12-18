import * as React from 'react';
import { Text } from '@chakra-ui/react';

interface ParagraphNewLineProps {
  text: string;
}
export const ParagraphNewLine = ({ text }: ParagraphNewLineProps) => {
  const newText = text.split('\\n').map((str, i) => <Text key={i}>{str}</Text>);
  return <>{newText}</>;
};
