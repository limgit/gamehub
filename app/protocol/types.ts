export type GameID = 'lattice';

export type Room = {
  roomId: string,
  gameId: GameID,
  maxPlayers: number,
  currPlayers: number,
};
