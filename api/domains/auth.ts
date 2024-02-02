import instance from '@/api/fetch';
import { apiRoute } from '@/api/route';
import type { Session } from 'next-auth';

export const fetchAuthSession = async () => {
  const { data } = await instance.get<Session>(
    apiRoute({ key: 'auth.session', searchParams: undefined })
  );

  return data;
};
