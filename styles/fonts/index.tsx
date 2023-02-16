// eslint-disable-next-line camelcase
import { Noto_Serif, Roboto } from '@next/font/google';
import localFont from '@next/font/local';

// Font files can be colocated inside of `app`
export const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-noto-serif',
});

export const pretendardFont = localFont({
  src: './PretendardVariable.woff2',
  style: 'normal',
  variable: '--font-pretendard',
});

export const robotoFont = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});
