import instance from '@/api/fetch';
import { apiRoute } from '@/api/route';

interface Sample {
  id: number;
}

export const fetchMainCharacter = async () => {
  const { data } = await instance.get<Sample>(
    apiRoute({ key: 'main.sections', searchParams: { index: 1 } })
  );

  return data;
};
