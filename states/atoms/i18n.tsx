'use client';

import { atom } from 'recoil';

export const locale = atom({
  key: 'locale',
  default: 'ko-KR',
});

export default locale;
