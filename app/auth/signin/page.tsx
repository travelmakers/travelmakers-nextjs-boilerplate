'use client';
import { useEffect } from 'react';

import useMainCharacterViewModel from '@/hooks/useMainCharacterViewModel';
import { useClientSession } from '@/utils/session/getUserClientSession';
import { signIn, signOut } from 'next-auth/react';

const SignIn = () => {
  const user = useClientSession();
  const {
    dataMainCharacter,
    userStore: { userInfo, setUserInfo, deleteUserInfo },
  } = useMainCharacterViewModel();

  console.log('dataMainCharacter', dataMainCharacter);
  useEffect(() => {
    if (user.status === 'authenticated') {
      user.session?.user ? setUserInfo(user.session.user) : deleteUserInfo();
    }
  }, []);

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
      <br />
      <br />
      <br />
      {JSON.stringify(userInfo)}
    </div>
  );
};
export default SignIn;
