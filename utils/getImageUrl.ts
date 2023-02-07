import { S3_URL } from 'config';
import type { ImageProps } from 'next/image';

export const getImageUrl = (url: ImageProps['src']): string =>
  typeof url === 'string' && !url.startsWith('https://')
    ? `${S3_URL}${url}`
    : `${url}`;
