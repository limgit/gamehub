import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react';

import { GAME_META } from '@/common/gameMeta';
import { GameID } from '@/protocol/types';

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
  onClick: () => void,
}
function RoomCard({
  roomId, gameId, playerCount, onClick,
}: RoomCardProps) {
  const minPlayerCount = GAME_META[gameId].minPlayers;
  const maxPlayerCount = GAME_META[gameId].maxPlayers;
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
        <Text>{playerCount} / {minPlayerCount}-{maxPlayerCount}</Text>
      </Flex>
      <Text>{GAME_META[gameId].name}</Text>
    </Box>
  );
}

export default RoomCard;
