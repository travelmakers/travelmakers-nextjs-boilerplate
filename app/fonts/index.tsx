// eslint-disable-next-line camelcase
import { Noto_Serif } from '@next/font/google';
import localFont from '@next/font/local';

// Font files can be colocated inside of `app`
export const notoSerifFont = Noto_Serif({
  subsets: ['latin'],
  display: 'optional',
  weight: ['400', '700'],
});

export const pretendardFont = localFont({
  src: './PretendardVariable.woff2',
});
