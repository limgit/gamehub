import { GameID } from '@/protocol/types';

type GameMeta = {
  [key in GameID]: {
    maxPlayers: number,
    minPlayers: number,
  };
};

export const GAME_META: GameMeta = {
  'lattice': {
    minPlayers: 2,
    maxPlayers: 4,
  },
};
