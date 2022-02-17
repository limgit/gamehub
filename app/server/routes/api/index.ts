import express from 'express';

import {
  GetRoomListRes,
} from '@/protocol/api';
import {
  Room,
} from '@/protocol/types';

import { dbGetJson } from '@server/db';
import { KEY_ROOM_LIST } from '@server/consts';

const apiRouter = express.Router();

apiRouter.get('/room-list', (_, res) => {
  const roomList = dbGetJson<Room[]>(KEY_ROOM_LIST);
  const ret: GetRoomListRes = roomList ?? [];
  res.send(ret);
});

export default apiRouter;
