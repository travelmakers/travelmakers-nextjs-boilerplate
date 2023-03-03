import * as Sentry from '@sentry/nextjs';

export const basicFetch = async <returnType,>(
  endpoint: string
): Promise<returnType> => {
  try {
    const response = await fetch(endpoint);
    const responseData = await response.json();
    if (response.status >= 400) {
      throw new Error(responseData);
    }
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
    const response = await fetch(endpoint, {
      method: method ?? 'POST',
      body: JSON.stringify({
        ...bodyData,
      }),
    });
    const responseData = await response.json();
    if (response.status >= 400) {
      throw new Error(responseData);
    }
    return responseData;
  } catch (error) {
    Sentry.captureException(error);
    throw error;
  }
};
