type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

type CallAPIRet<Res> = {
  ok: true,
  json: Res,
} | {
  ok: false,
  code: number,
  msg: string,
};
export async function callAPI<Req extends any = undefined, Res extends any = undefined>(
  url: string, method: HTTPMethod, body: Req
): Promise<CallAPIRet<Res>> {
  try {
    const res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      return {
        ok: true,
        json: await res.json() as Res,
      };
    }
    return {
      ok: false,
      code: res.status,
      msg: res.statusText,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : JSON.stringify(e);
    return {
      ok: false,
      code: -1,
      msg: `Unknown error (${msg})`,
    };
  }
}
