export const isAuthorized = (request: Request) => {
  const token = '';
  request.headers.append('Authorization', `JWT ${token}`);
  return request;
};
