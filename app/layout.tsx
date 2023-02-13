/* eslint-disable camelcase */
import ChannelTalk from '@/components/ChannelTalk';
import ReactHotToast from '@/components/ReactHotToast';
import ReactQuery from '@/components/ReactQuery';
import Recoil from '@/components/Recoil';
import AuthContext from '@/components/SessionContext';
import StyledComponent from '@/components/StyledComponent';
import StyledComponentsRegistry from '@/lib/registry';
import { getServerSession } from 'next-auth/next';
import React from 'react';

import GlobalNav from './GlobalNav';
import { notoSerifFont, pretendardFont } from './fonts';

interface Props {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  // TODO: getServerSession 사용? unstable_getServerSession 사용?
  const session = await getServerSession();
  return (
    <html
      lang="ko-KR"
      className={`${pretendardFont.className} ${notoSerifFont.className}`}
    >
      <AuthContext session={session}>
        <head />
        <body
          className={`${pretendardFont.className} ${notoSerifFont.className}`}
        >
          <Recoil>
            <StyledComponent>
              <StyledComponentsRegistry>
                <ReactQuery>
                  <GlobalNav />
                  {children}
                </ReactQuery>
              </StyledComponentsRegistry>
            </StyledComponent>
          </Recoil>
          <ReactHotToast />
          <ChannelTalk />
        </body>
      </AuthContext>
    </html>
  );
};

export default RootLayout;
