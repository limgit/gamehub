import useSWR from 'swr';

import { callAPI } from '@client/utils';
import { APIError } from './types';

// Wrapper for SWR which utilizes thrown error
export async function callGetAPI<Res extends any = undefined>(url: string): Promise<Res> {
  const res = await callAPI<undefined, Res>(url, 'GET', undefined);
  if (res.ok) return res.json;
  const error: APIError = {
    code: res.code,
    msg: res.msg,
  };
  throw error;
}

export function useGetReq<Res extends any = undefined>(url: string) {
  return useSWR<Res, APIError>(url, () => callGetAPI<Res>(url));
}