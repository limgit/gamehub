const APP_VERSION = 'v1';
function genKey(keystring: string): string {
  return `${APP_VERSION}/${keystring}`;
}

export const KEY_USERNAME = genKey('gamehub-username');
export const KEY_USERID = genKey('gamehub-userid');
