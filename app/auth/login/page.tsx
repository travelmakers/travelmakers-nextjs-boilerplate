'use client';

import { signIn } from 'next-auth/react';

const Login = () => (
  <div>
    <button type="button" onClick={() => signIn('kakao')}>
      Login
    </button>
    {/* Signed in as {session.user.name} <br />
      <button type="button" onClick={() => signOut()}>
        Sign out
      </button> */}
  </div>
);

export default Login;
