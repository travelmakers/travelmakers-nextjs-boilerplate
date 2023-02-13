export const basicFetch = async <returnType,>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error('Error!');

  const data = await response.json();

  return data;
};

export const mutateFetch = async (
  endpoint: string,
  method?: string,
  bodyData?: Object
) => {
  const response = await fetch(endpoint, {
    method: method ?? 'POST',
    body: JSON.stringify({
      ...bodyData,
    }),
  });

  if (!response.ok) throw new Error('Error!');

  const data = await response.json();

  return data;
};
