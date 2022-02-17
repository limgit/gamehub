const db: any = {};

export function dbGetJson<T>(key: string): T | undefined {
  return db[key];
}

export function dbSetJson<T>(key: string, value: T): void {
  db[key] = value;
}

