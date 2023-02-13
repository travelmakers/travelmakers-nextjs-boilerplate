import { basicFetch } from '@/api/fetchFunctions';
import { Movies } from '@/api/types';
import { API_URL } from 'config';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  // const { page, search } = req.query;

  const endpoint: string = `${API_URL}/coffee/hot`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data);
}
