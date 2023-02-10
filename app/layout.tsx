/* eslint-disable camelcase */
import AuthContext from '@/components/SessionContext';
import StyledComponentsRegistry from '@/lib/registry';
import ChannelTalk from 'components/ChannelTalk';
import ReactHotToast from 'components/ReactHotToast';
import ReactQuery from 'components/ReactQuery';
import StyledComponent from 'components/StyledComponent';
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
          {/* <Recoil> */}
          <ReactQuery>
            <StyledComponent>
              <StyledComponentsRegistry>
                <GlobalNav />
                {children}
              </StyledComponentsRegistry>
            </StyledComponent>
          </ReactQuery>
          {/* </Recoil> */}
          <ReactHotToast />
          <ChannelTalk />
        </body>
      </AuthContext>
    </html>
  );
};

export default RootLayout;
