import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

import { KEY_USERNAME } from '@client/consts';
import { getLocalValue, setLocalValue } from '@client/storage';

function genRandomName(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 6;
  let name = 'Player';
  for (let i = 0; i < length; i++) {
    name += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return name;
}

function Home() {
  const navigate = useNavigate();
  const username = getLocalValue<string>(KEY_USERNAME);
  const [nameInput, setNameInput] = React.useState(username ?? genRandomName());

  const onLoginClick = () => {
    setLocalValue(KEY_USERNAME, nameInput);
    navigate('/lobby');
  }

  return (
    <Center h="100vh">
      <VStack
        spacing={8}
        p={16}
        boxShadow="md"
        borderRadius="md"
        bgColor="orange.100"
      >
        <Heading>Welcome to GameHub!</Heading>
        <FormControl>
          <FormLabel htmlFor="username">Your player name:</FormLabel>
          <Input
            id="username"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            bgColor="white"
            borderColor="white"
          />
        </FormControl>
        <Button onClick={onLoginClick} colorScheme="orange">Start!</Button>
      </VStack>
    </Center>
  )
}

export default Home;
