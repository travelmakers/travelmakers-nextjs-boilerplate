import { IMypage } from '@/types/api.mypage';
import { IHotelInfo } from '@hotel/api';

import { basicFetch, mutateFetch } from '../fetchFunctions';
import { LIV_MAIN_URL, LIV_MYPAGE_URL } from '../urls/travelmakers';

export const fetchMain = async (): Promise<IHotelInfo> => {
  const result = await basicFetch<IHotelInfo>(`${LIV_MAIN_URL}`);
  return result;
};

export const fetchMypage = async (): Promise<IMypage> => {
  const result = await basicFetch<IMypage>(`${LIV_MYPAGE_URL}`);
  return result;
};

export const mutateMain = async (
  method: 'post' | 'put' | 'patch' | 'delete',
  data?: Object
): Promise<IHotelInfo> => {
  const result = await mutateFetch(`${LIV_MAIN_URL}`, method, data);
  return result;
};
