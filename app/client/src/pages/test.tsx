import React from 'react';
import { Heading } from '@chakra-ui/react';

interface TestProps {
  username: string,
};
function Test({ username }: TestProps) {
  return (
    <Heading>This is test route {username}</Heading>
  )
}

export default Test;
