import { API_QA_URL, API_URL } from '@/config';

export const BASE_URL =
  process.env.NODE_ENV === 'production' ? API_URL : API_QA_URL;
