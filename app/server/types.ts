export type GameID = 'lattice';

export type Lobby = {
  roomId: string,
  gameId: GameID,
  maxPlayers: number,
  currPlayers: number,
};
