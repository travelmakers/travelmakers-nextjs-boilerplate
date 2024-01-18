// eslint-disable-next-line camelcase
import { Noto_Sans_KR, Noto_Serif } from 'next/font/google';
import localFont from 'next/font/local'; // Font files can be collocated inside `app`

// Font files can be collocated inside `app`
export const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const pretendardFont = localFont({
  src: [
    {
      path: './Pretendard-Bold.subset.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: './Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Pretendard-Regular.subset.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ],
  display: 'swap',
  preload: true,
  variable: '--font-pretendard',
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});

export const notoSansKr = Noto_Sans_KR({
  preload: false,
  weight: ['100', '400', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
  fallback: [
    '-apple-system',
    'Malgun Gothic',
    'Apple SD Gothic Neo',
    'Roboto',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
});
