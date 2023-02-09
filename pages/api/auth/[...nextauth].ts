/* eslint-disable no-param-reassign */
import NextAuth, { User } from 'next-auth';
import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export default NextAuth({
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  providers: [
    AppleProvider({
      clientId: process.env.NEXT_PUBLIC_APPLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_APPLE_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.NEXT_PUBLIC_FACEBOOK_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_SECRET as string,
    }),
    KakaoProvider({
      clientId: process.env.NEXT_PUBLIC_KAKAO_API_KEY as string,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_SECRET as string,
    }),
    NaverProvider({
      clientId: process.env.NEXT_PUBLIC_NAVER_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      id: 'username-password-credentials',
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'GiDong Seong', email: 'sgd0947@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch('/your/endpoint', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' },
        });
        const user = await res.json();

        // If no error and we have user data, return it
        const userTest = {
          id: 1,
          name: 'test user',
          email: 'testuser@email.com',
        };
        if (res.ok && user) {
          return user;
        }
        return userTest;
        // Return null if user data could not be retrieved
        // return null;
      },
    }),
  ],

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
          accessTokenExpires: account.expires_at,
          refreshToken: account.refresh_token,
          user,
        };
      }

      return token;

      // if (Date.now() < token.accessTokenExpires) {
      //   return token;
      // }

      // return await refreshAccessToken(token);
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
      return session;
    },
  },
});

/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
// async function refreshAccessToken(token: JWT) {
//   try {
//     const url = `https://oauth2.googleapis.com/token?${new URLSearchParams({
//       client_id: process.env.NEXT_PUBLIC_GOOGLE_ID,
//       client_secret: process.env.NEXT_PUBLIC_GOOGLE_SECRET,
//       grant_type: 'refresh_token',
//       // refresh_token: token.refreshToken,
//     })}`;

//     const response = await fetch(url, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       method: 'POST',
//     });

//     const refreshedTokens = await response.json();

//     if (!response.ok) {
//       throw refreshedTokens;
//     }

//     return {
//       ...token,
//       accessToken: refreshedTokens.access_token,
//       accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
//       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       ...token,
//       error: 'RefreshAccessTokenError',
//     };
//   }
// }
