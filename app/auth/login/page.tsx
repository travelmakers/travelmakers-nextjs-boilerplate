'use client';

import { getUserClientSession } from '@/utils/getUserClientSession';
import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  const { session, status } = getUserClientSession();

  const isUser = !!session?.user;
  if (!isUser) {
    return (
      <>
        <button type="button" onClick={() => signIn('kakao')}>
          Kakao Login
        </button>
        <button
          type="button"
          onClick={() =>
            signIn('email-password-credentials', {
              email: process.env.NEXT_PUBLIC_EMAIL,
              password: process.env.NEXT_PUBLIC_PASSWORD,
            })
          }
        >
          Credential Login
        </button>
      </>
    );
  }
  return (
    <div>
      <p>status:{status}</p>
      <br />
      Signed in as {session?.user?.name} <br />
      <button type="button" onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  );
};

export default Login;
