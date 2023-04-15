import { IHotelInfo } from '@hotel/api';

import { basicFetch, mutateFetch } from '../fetchFunctions';
import { LIV_MAIN_URL } from '../urls/livinginhotel';

export const fetchMain = async (): Promise<IHotelInfo> => {
  const result = await basicFetch<IHotelInfo>(`${LIV_MAIN_URL}`);
  return result;
};

export const fetchMainKey = ['main', '-'];

export const mutateMain = async (
  method: 'post' | 'put' | 'patch' | 'delete',
  data?: Object
): Promise<IHotelInfo> => {
  const result = await mutateFetch(`${LIV_MAIN_URL}`, method, data);
  return result;
};
