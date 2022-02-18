export type GameID = 'lattice';

type User = {
  id: string,
  name: string,
}

export type Room = {
  roomId: string,
  gameId: GameID,
  players: User[],
};
