import { getUserServerSession } from '@/utils/getUserServerSession';
import * as Sentry from '@sentry/nextjs';
import { signOut } from 'next-auth/react';

import { BASE_URL } from './urls/versions';

async function errorException(response: Response) {
  const responseData = await response.json();
  if (response.status >= 400) {
    if (response.status === 401) {
      signOut();
      // throw new Error(MESSAGE_UNAUTHORIZED);
    } else {
      throw new Error(response.statusText);
    }
  }
  return responseData;
}

export const basicFetch = async <returnType,>(
  endpoint: string
): Promise<returnType> => {
  try {
    const user = await getUserServerSession();
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: user
        ? {
            Accept: 'application/json',
            Authorization: `Bearer ${user?.user?.accessToken}`,
          }
        : {
            Accept: 'application/json',
          },
    });
    const responseData = await errorException(response);
    return responseData;
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};

export const mutateFetch = async (
  endpoint: string,
  method?: string,
  bodyData?: Object
) => {
  try {
    const user = await getUserServerSession();
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: method ?? 'POST',
      headers: user
        ? {
            Accept: 'application/json',
            Authorization: `Bearer ${user?.user?.accessToken}`,
          }
        : {
            Accept: 'application/json',
          },
      body: JSON.stringify({
        ...bodyData,
      }),
    });
    const responseData = await errorException(response);
    return responseData;
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};
