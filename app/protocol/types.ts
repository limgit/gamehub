export type GameID = 'lattice';

export type Room = {
  roomId: string,
  gameId: GameID,
  playerIds: string[],
};
