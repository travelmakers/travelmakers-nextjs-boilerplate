import ChannelTalk from '@/components/ChannelTalk';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import ReactHotToast from '@/components/ReactHotToast';
import ReactQuery from '@/components/ReactQuery';
import Recoil from '@/components/Recoil';
import AuthContext from '@/components/SessionContext';
import StyledComponent from '@/components/StyledComponent';
import StyledComponentsRegistry from '@/lib/registry';
import { notoSerifFont, pretendardFont } from '@/styles/fonts';
import Head from '@/ui/Head';
import { getMetadata } from '@/utils/getMetadata';
import { getUserServerSession } from '@/utils/getUserServerSession';
import { dir } from 'i18next';
import { Metadata } from 'next';
import 'next-auth/next';
import { PropsWithChildren } from 'react';
import 'swiper/swiper.css';

interface Props {
  params: {
    lng: string;
  };
}

// ANCHOR: Static metadata
export const metadata: Metadata = getMetadata();

const RootLayout = async ({
  children,
  params: { lng },
}: PropsWithChildren<Props>) => {
  const session = await getUserServerSession();
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${pretendardFont.variable} ${notoSerifFont.variable}`}
    >
      <AuthContext session={session}>
        <body>
          <StyledComponentsRegistry>
            <StyledComponent>
              <Recoil>
                <ReactQuery>
                  <Head lng={lng} />
                  {children}
                </ReactQuery>
              </Recoil>
            </StyledComponent>
          </StyledComponentsRegistry>
          <GoogleAnalytics />
          <ReactHotToast />
          <ChannelTalk />
        </body>
      </AuthContext>
    </html>
  );
};

export default RootLayout;
