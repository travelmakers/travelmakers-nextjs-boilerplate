import type { ImageProps } from 'next/image';

export const getImageUrl = (url: ImageProps['src']): string =>
  typeof url === 'string' && !url.startsWith('https://')
    ? `${process.env.NEXT_PUBLIC_S3_URL}${url}`
    : `${url}`;
