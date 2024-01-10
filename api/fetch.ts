interface ApiResponse<T> {
  data: T;
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const initOptions = async (method: HttpMethod, options: object = {}) => {
  // const isServer = typeof window === 'undefined';
  // const session = isServer
  //   ? await getUserServerSession()
  //   : getUserClientSession();

  const _options = {
    headers: {
      Authorization: '',
    },
    method,
    ...options,
  };

  // if (session) {
  //   const userSession = session.session;
  //   const accessToken = userSession?.user?.accessToken;
  //
  //   _options.headers.Authorization = `Bearer ${accessToken}`;
  // }

  return _options;
};

const innerFetch = async (
  method: HttpMethod,
  url: string,
  options?: object
) => {
  try {
    console.log('api', 'innerFetch');
    const _options = await initOptions(method, options);
    const response = await fetch(`${url}`, _options);
    // const response = await fetch(`${BASE_URL}${url}`, _options);
    console.log('api', `${url}`);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    return { data: await response.json() };
  } catch (error) {
    console.log('api', 'innerFetch', 'error');
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
