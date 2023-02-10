'use client';

import commonKO from 'locales/ko/common.json';
import I18nProvider from 'next-translate/I18nProvider';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const I18nContext: React.FC<Props> = ({ children }) => (
  <I18nProvider lang="ko" namespaces={{ common: commonKO }}>
    {children}
  </I18nProvider>
);

export default I18nContext;
