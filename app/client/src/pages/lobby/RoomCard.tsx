import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { GameID } from '@/protocol/types';

import { gameIdToName } from '@client/utils';

export function EmptyRoomCard() {
  return (
    <Box
      w="100%"
      minW="400px"
      h="100%"
      minH="80px"
      p={4}
      borderRadius="md"
      bgColor="white"
    />
  );
}

type RoomCardProps = {
  roomId: string,
  gameId: GameID,
  playerCount: number,
  maxPlayerCount: number,
  onClick: () => void,
}
function RoomCard({
  roomId, gameId, playerCount, maxPlayerCount, onClick,
}: RoomCardProps) {
  return (
    <Box
      w="100%"
      minW="400px"
      h="100%"
      minH="80px"
      onClick={onClick}
      cursor="pointer"
      p={4}
      borderRadius="md"
      bgColor={playerCount === maxPlayerCount ? 'gray.100' : 'white'}
    >
      <Flex alignItems="center">
        <Heading size="sm">Room {roomId}</Heading>
        <Spacer />
        <Text>{playerCount} / {maxPlayerCount}</Text>
      </Flex>
      <Text>게임: {gameIdToName(gameId)}</Text>
    </Box>
  );
}

export default RoomCard;
