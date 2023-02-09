'use client';

import commonKO from 'locales/ko/common.json';
import BaseI18nProvider from 'next-translate/I18nProvider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const I18nProvider: React.FC<Props> = ({ children }) => (
  <BaseI18nProvider lang="ko" namespaces={{ common: commonKO }}>
    {children}
  </BaseI18nProvider>
);

export default I18nProvider;
