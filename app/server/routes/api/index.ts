import express from 'express';

import {
  GetLobbyListRes,
} from '@/protocol/api';

import { dbGetJson } from '@server/db';
import { KEY_LOBBY_LIST } from '@server/consts';
import { Lobby } from '@server/types';

const apiRouter = express.Router();

apiRouter.get('/lobby-list', (_, res) => {
  const lobbyList = dbGetJson<Lobby[]>(KEY_LOBBY_LIST);
  const ret: GetLobbyListRes = lobbyList ?? [];
  res.send(ret);
});

export default apiRouter;
