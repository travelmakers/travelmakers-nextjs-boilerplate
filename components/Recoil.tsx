'use client';

import * as i18n from '@/states/atoms/i18n';
import { ReactNode, useCallback } from 'react';
import { RecoilRoot, SetRecoilState } from 'recoil';

type Props = {
  locale: string;
  children: ReactNode;
};

const Recoil = ({ locale, children }: Props) => {
  const initializeState = useCallback(
    ({ set }: { set: SetRecoilState }) => {
      set(i18n.locale, locale);
    },
    [locale]
  );

  return <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>;
};

export default Recoil;
