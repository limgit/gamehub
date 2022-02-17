export function getLocalValue<T>(key: string): T | undefined {
  const value = localStorage.getItem(key);
  if (value === null) {
    return undefined;
  }
  return JSON.parse(value) as T;
}

export function setLocalValue<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value));
}
