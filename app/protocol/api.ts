import { GameID } from '@/common/types';

// HTTP GET /api/room-list
export type GetRoomListRes = {
  roomId: string,
  gameId: GameID,
  playerCount: number,
}[];
