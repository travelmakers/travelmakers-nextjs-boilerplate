const API_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
const API_QA_URL: string =
  process.env.NEXT_PUBLIC_BASE_QA_URL || 'http://localhost:3000';
const GA_ID: string | undefined = process.env.NEXT_PUBLIC_GA_ID;
const SECRET_TOKEN: string | undefined = process.env.NEXT_PUBLIC_SECRET_TOKEN;
const CHANNEL_TALK_PLUGIN_KEY: string | undefined =
  process.env.NEXT_PUBLIC_CHANNEL_TALK_PLUGIN_KEY;
const ALLOW_S3_URL: string | undefined = process.env.NEXT_PUBLIC_ALLOW_S3_URL;
const S3_URL: string | undefined = process.env.NEXT_PUBLIC_S3_URL;
const BLUR_DATA_URL: string | undefined = process.env.NEXT_PUBLIC_BLUR_DATA_URL;

export {
  API_URL,
  API_QA_URL,
  GA_ID,
  SECRET_TOKEN,
  CHANNEL_TALK_PLUGIN_KEY,
  ALLOW_S3_URL,
  S3_URL,
  BLUR_DATA_URL,
};
