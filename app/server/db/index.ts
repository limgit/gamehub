import DB from 'better-sqlite3';
import { GameID } from '@/common/types';

// https://github.com/JoshuaWise/better-sqlite3/blob/HEAD/docs/api.md
const db = new DB('./db/db.sqlite');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    username TEXT,
    room_id TEXT,
    FOREIGN KEY(room_id) REFERENCES rooms(id)
  );
  CREATE TABLE IF NOT EXISTS rooms (
    id TEXT PRIMARY KEY,
    game_id TEXT NOT NULL
  );
`);

export function getRoomList() {
  type Room = {
    id: string,
    game_id: GameID,
    player_count: number,
  }
  const roomList: Room[] = db.prepare(`
    SELECT rooms.id, rooms.game_id, COUNT(users.id) AS player_count
    FROM rooms LEFT JOIN users ON rooms.id = users.room_id
    GROUP BY rooms.id, rooms.game_id
  `).all();
  return roomList.map((room) => ({
    roomId: room.id,
    gameId: room.game_id,
    playerCount: room.player_count,
  }));
}
