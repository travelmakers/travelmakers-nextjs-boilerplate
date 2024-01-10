const API_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const API_QA_URL: string =
  process.env.NEXT_PUBLIC_BASE_QA_URL || 'http://localhost:3000';

export { API_URL, API_QA_URL };
