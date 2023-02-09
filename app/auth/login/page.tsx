'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

const Login = () => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  if (!isUser) {
    return (
      <button type="button" onClick={() => signIn('kakao')}>
        Login
      </button>
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
