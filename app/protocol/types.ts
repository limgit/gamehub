export type GameID = 'lattice';

export type Room = {
  roomId: string,
  gameId: GameID,
  minPlayers: number,
  maxPlayers: number,
  currPlayers: number,
};
