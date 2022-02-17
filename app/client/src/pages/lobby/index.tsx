import React from 'react';
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spinner,
} from '@chakra-ui/react';

import { GetRoomListRes } from '@/protocol/api';
import { useGetReq } from '@client/hooks/useGetReq';

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
        <Heading size="sm">Welcome, {username}!</Heading>
        <HStack>
          <Button colorScheme="orange">방 생성</Button>
          <Button colorScheme="orange">새로고침</Button>
        </HStack>
        {data === undefined && error === undefined && (
          <Spinner />
        )}
        {data !== undefined && (
          <Grid templateColumns="repeat(2, 1fr)">
            {data.map((room) => (
              <GridItem
                key={room.roomId}
              >
                {room.gameId}
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
