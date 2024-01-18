import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

const providers = [
  AppleProvider({
    clientId: process.env.NEXT_PUBLIC_APPLE_ID as string,
    clientSecret: process.env.NEXT_PUBLIC_APPLE_SECRET as string,
  }),
  KakaoProvider({
    clientId: process.env.NEXT_PUBLIC_KAKAO_API_KEY as string,
    clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET as string,
  }),
  CredentialsProvider({
    id: 'email-password-credentials',
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      email: { label: 'email', type: 'text', placeholder: 'email' },
      password: { label: 'password', type: 'password' },
    },
    async authorize(credentials) {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'GiDong Seong', email: 'sgd0947@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      console.log('credentials', credentials);

      const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

      if (user) {
        // Any object returned will be saved in `user` property of the JWT
        return user;
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null;

        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
      }
    },
  }),
];

export const authOptions: NextAuthOptions = {
  // NOTE: jwt 사용을 위한 임의의 난수를 할당
  secret: process.env.NEXTAUTH_SECRET,
  // NOTE: 세션 전략을 jwt로 설정
  session: { strategy: 'jwt' },
  // NOTE: custom login page
  pages: {
    signIn: '/auth/signin',
  },
  providers,
  callbacks: {
    /**
     * ANCHOR: JWT Callback
     * 웹 토큰이 실행 혹은 업데이트될때마다 콜백이 실행
     * 반환된 값은 암호화되어 쿠키에 저장됨
     */
    async jwt({ token, account, user }) {
      if (account && user) {
        return {
          ...token,
          accessToken: account.access_token,
          accessTokenExpires: account.accessTokenExpires,
          refreshToken: account.refreshToken,
          user,
        };
      }

      return token;
    },

    /**
     * ANCHOR: Session Callback
     * ClientSide에서 NextAuth에 세션을 체크할때마다 실행
     * 반환된 값은 useSession을 통해 ClientSide에서 사용할 수 있음
     * JWT 토큰의 정보를 Session에 유지 시킨다.
     */
    async session({ session }) {
      // session.accessToken = token.accessToken;
      // session.accessTokenExpires = token.accessTokenExpires;
      // session.error = token.error;
      return session;
    },
  },
};

export default NextAuth(authOptions);
