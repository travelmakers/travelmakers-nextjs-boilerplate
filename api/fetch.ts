import { getUserClientSession } from '@/utils/session/getUserClientSession';
import { getUserServerSession } from '@/utils/session/getUserServerSession';
import type { Session } from 'next-auth';

interface ApiResponse<T> {
  data: T;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const initOptions = (
  method: HttpMethod,
  session: Session | null,
  options: object = { headers: {} }
) => {
  const _options = {
    headers: {
      Authorization: '',
    },
    method,
    ...options,
  };

  if (session) {
    const accessToken = session.user?.email;
    if (accessToken) {
      _options.headers.Authorization = `Bearer ${accessToken}`;
    }
  }

  return _options;
};

const innerFetch = async (
  method: HttpMethod,
  url: string,
  options?: object
) => {
  try {
    const isServer = typeof window === 'undefined';

    const userSession = isServer
      ? await getUserServerSession()
      : await getUserClientSession();

    const _options = initOptions(method, userSession.session, options);
    const response = await fetch(`${url}`, _options);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return { data: await response.json() };
  } catch (error) {
    console.log('api', 'innerFetch', 'error', error);
    throw error;
  }
};

const instance = {
  get: async <T>(url: string, options?: object): Promise<ApiResponse<T>> =>
    await innerFetch('GET', url, options),

  post: async <T>(url: string, options?: object): Promise<ApiResponse<T>> =>
    await innerFetch('POST', url, options),

  put: async <T>(url: string, options?: object): Promise<ApiResponse<T>> =>
    await innerFetch('PUT', url, options),

  patch: async <T>(url: string, options?: object): Promise<ApiResponse<T>> =>
    await innerFetch('PATCH', url, options),

  delete: async <T>(url: string, options?: object): Promise<ApiResponse<T>> =>
    await innerFetch('DELETE', url, options),
};

export default instance;
