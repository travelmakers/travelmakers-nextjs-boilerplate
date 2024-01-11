'use client';
import { useClientSession } from '@/utils/session/getUserClientSession';
import { signIn, signOut } from 'next-auth/react';

const SignIn = () => {
  const user = useClientSession();
  return (
    <div>
      <h1>Sign In</h1>
      {JSON.stringify(user)}
      <button
        onClick={() =>
          signIn('email-password-credentials', {
            email: '123',
            password: '123',
          })
        }
      >
        Sign In
      </button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};
export default SignIn;
