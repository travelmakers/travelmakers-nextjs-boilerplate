import ChannelTalk from '@/components/ChannelTalk';
import ReactHotToast from '@/components/ReactHotToast';
import ReactQuery from '@/components/ReactQuery';
import Recoil from '@/components/Recoil';
import AuthContext from '@/components/SessionContext';
import StyledComponent from '@/components/StyledComponent';
import StyledComponentsRegistry from '@/lib/registry';
import { notoSerifFont, pretendardFont, robotoFont } from '@/styles/fonts';
import Head from '@/ui/Head';
import { getUserServerSession } from '@/utils/getUserServerSession';
import 'next-auth/next';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  const session = await getUserServerSession();
  return (
    <html
      lang="ko-KR"
      className={`${pretendardFont.variable} ${notoSerifFont.variable} ${robotoFont.variable}`}
    >
      {JSON.stringify(session)}
      {JSON.stringify(session === null)}
      <AuthContext session={session}>
        <head />
        <body>
          <Recoil>
            <StyledComponent>
              <StyledComponentsRegistry>
                <ReactQuery>
                  <Head />
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
