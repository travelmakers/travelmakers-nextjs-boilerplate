'use client';
import useMainCharacterViewModel from '@/app/auth/signin/hooks/useMainCharacterViewModel';
import { useClientSession } from '@/utils/session/useClientSession';
import { signIn, signOut } from 'next-auth/react';

const ViewComponent = () => {
  useMainCharacterViewModel();
  const { session } = useClientSession();

  return (
    <div>
      {' '}
      <h1>Sign In</h1>
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
      <br />
      <br />
      <br />
      {JSON.stringify(session?.user)}
    </div>
  );
};

export default ViewComponent;
