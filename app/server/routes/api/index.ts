import express from 'express';

import {
  GetRoomListRes,
} from '@/protocol/api';

import { getRoomList } from '@server/db';

const apiRouter = express.Router();

apiRouter.get('/room-list', (_, res) => {
  const roomList = getRoomList();
  const ret: GetRoomListRes = roomList;
  res.send(ret);
});

export default apiRouter;
