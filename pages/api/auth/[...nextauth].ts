/* eslint-disable no-param-reassign */
import { BASE_URL } from '@/api/urls/versions';
import type { IUser, UserStatus } from '@/types/api.user';
import NextAuth, { User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import KakaoProvider from 'next-auth/providers/kakao';

const providers = [
  AppleProvider({
    clientId: process.env.NEXT_PUBLIC_APPLE_ID as string,
    clientSecret: process.env.NEXT_PUBLIC_APPLE_SECRET as string,
    // @ts-ignore
    async profile(profile) {
      return {
        ...profile,
        provider: 'apple',
      };
    },
  }),
  KakaoProvider({
    clientId: process.env.NEXT_PUBLIC_KAKAO_API_KEY as string,
    clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET as string,
    // @ts-ignore
    async profile(profile) {
      return {
        ...profile,
        provider: 'kakao',
      };
    },
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
    // @ts-ignore
    async authorize(credentials): Promise<IUser | null> {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'GiDong Seong', email: 'sgd0947@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      // NOTE: 필요한 정보
      // 1. get a token
      // 2. get a user info
      const tokenResponse = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { 'Content-Type': 'application/json' },
      });
      // NOTE: Example Json
      // {
      //   type: 'login',
      //   status: 'success',
      //   data: {
      //     token: {
      //       accessToken: [Object],
      //       plainTextToken: '45108|e5TYw'
      //     }
      //   }
      // }
      const token = await tokenResponse.json();
      if (tokenResponse.ok && token) {
        const userResponse = await fetch(`${BASE_URL}/sanctum/check/user`, {
          method: 'POST',
          body: undefined,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token?.data.token?.plainTextToken}`,
          },
        });
        const {
          data: { user },
        }: UserStatus = await userResponse.json();

        if (userResponse.ok && user) {
          return { ...user, accessToken: token?.data.token?.plainTextToken };
        }
      }

      // Return null if user data could not be retrieved
      return null;
    },
  }),
];

async function getSocialProviderProfile(token: JWT, provider: string) {
  const tokenResponse = await fetch(
    `${BASE_URL}/login/social/callback/${provider ?? 'kakao'}`,
    {
      method: 'POST',
      body: JSON.stringify({
        social_token: token?.accessToken,
      }),
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const tokenData = await tokenResponse.json();

  if (tokenResponse.ok && tokenData) {
    const userResponse = await fetch(`${BASE_URL}/sanctum/check/user`, {
      method: 'POST',
      body: undefined,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokenData?.data.token?.plainTextToken}`,
      },
    });
    const {
      data: { user: userData },
    }: UserStatus = await userResponse.json();

    // console.log('sgd-userResponse', { ...token, ...userData });
    if (userResponse.ok && userData) {
      return {
        ...token,
        user: {
          ...userData,
          accessToken: tokenData?.data.token?.plainTextToken,
        },
      };
    }
  }
  return token;
}

export default NextAuth({
  // NOTE: jwt 사용을 위한 임의의 난수를 할당
  secret: process.env.NEXTAUTH_SECRET,
  // NOTE: 세션 전략을 jwt로 설정
  session: { strategy: 'jwt' },
  // NOTE: custom login page
  pages: {
    signIn: '/auth/login',
  },
  providers,
  callbacks: {
    /**
     * ANCHOR: JWT Callback
     * 웹 토큰이 실행 혹은 업데이트될때마다 콜백이 실행
     * 반환된 값은 암호화되어 쿠키에 저장됨
     */
    // @ts-ignore
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

      // @ts-ignore
      const provider = `${token?.user?.provider}`;
      if (provider === 'kakao' || provider === 'apple') {
        const result = await getSocialProviderProfile(token, provider);
        return result;
      }
      return token;
    },

    /**
     * ANCHOR: Session Callback
     * ClientSide에서 NextAuth에 세션을 체크할때마다 실행
     * 반환된 값은 useSession을 통해 ClientSide에서 사용할 수 있음
     * JWT 토큰의 정보를 Session에 유지 시킨다.
     */
    async session({ session, token }) {
      session.user = token.user as User;
      // session.accessToken = token.accessToken;
      // session.accessTokenExpires = token.accessTokenExpires;
      // session.error = token.error;
      return { ...session, ...token };
    },
  },
});
