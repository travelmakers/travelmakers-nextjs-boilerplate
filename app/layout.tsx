import StyledComponentsRegistry from '@/lib/registry';
import ChannelTalk from 'components/ChannelTalk';
import ReactHotToast from 'components/ReactHotToast';
import ReactQuery from 'components/ReactQuery';
import Recoil from 'components/Recoil';
import StyledComponent from 'components/StyledComponent';
import React from 'react';

import GlobalNav from './GlobalNav';
import { notoSerifFont, pretendardFont } from './fonts';

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => (
  <html
    lang="ko-KR"
    className={`${pretendardFont.className} ${notoSerifFont.className}`}
  >
    <head />
    <body className={`${pretendardFont.className} ${notoSerifFont.className}`}>
      <Recoil locale="ko-KR">
        <ReactQuery>
          <StyledComponent>
            <StyledComponentsRegistry>
              <GlobalNav />
              {children}
            </StyledComponentsRegistry>
          </StyledComponent>
        </ReactQuery>
      </Recoil>
      <ReactHotToast />
      <ChannelTalk />
    </body>
  </html>
);

export default RootLayout;
