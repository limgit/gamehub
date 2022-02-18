import React from 'react';
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  Spinner,
} from '@chakra-ui/react';
import {
  BiPlus,
  BiRefresh,
} from 'react-icons/bi';

import { GetRoomListRes } from '@/protocol/api';
import { useGetReq } from '@client/hooks/useGetReq';

import RoomCard, { EmptyRoomCard } from './RoomCard';

type LobbyProps = {
  username: string,
}
function Lobby({ username }: LobbyProps) {
  const { data, error } = useGetReq<GetRoomListRes>('/api/room-list');

  return (
    <Center h="100vh">
      <Box
        p={12}
        boxShadow="md"
        borderRadius="md"
        bgColor="orange.100"
      >
        <Heading size="md">Welcome, {username}!</Heading>
        <HStack my={4}>
          <Spacer />
          <Button size="sm" colorScheme="orange" leftIcon={<BiPlus />}>방 생성</Button>
          <Button size="sm" colorScheme="orange" leftIcon={<BiRefresh />}>새로고침</Button>
        </HStack>
        {data === undefined && error === undefined && (
          <Spinner />
        )}
        {data !== undefined && (
          <Grid templateColumns="repeat(2, 1fr)" gap={2} gridAutoRows="1fr">
            {data.map((room) => (
              <GridItem key={room.roomId}>
                <RoomCard
                  roomId={room.roomId}
                  gameId={room.gameId}
                  playerCount={room.currPlayers}
                  onClick={() => {}}
                />
              </GridItem>
            ))}
            {new Array(Math.max(0, 6 - data.length)).fill(0).map((_, i) => (
              <GridItem key={i}>
                <EmptyRoomCard />
              </GridItem>
            ))}
          </Grid>
        )}
        {error !== undefined && (
          <Heading>{error.msg}</Heading>
        )}
      </Box>
    </Center>
  );
}

export default Lobby;
