import { GameID } from './types';

type GameMeta = {
  [key in GameID]: {
    name: string,
    maxPlayers: number,
    minPlayers: number,
  };
};

export const GAME_META: GameMeta = {
  'lattice': {
    name: '라티스 하와이',
    minPlayers: 2,
    maxPlayers: 4,
  },
};
