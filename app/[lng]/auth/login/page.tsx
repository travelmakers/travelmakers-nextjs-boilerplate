'use client';

import useForm from '@/hooks/useForm';
import RootContainer from '@/ui/RootContainer';
import { getUserClientSession } from '@/utils/getUserClientSession';
import SignUpValidation from '@/utils/validations/SignUpValidation';
import { signIn, signOut } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const Login = () => {
  const { session, status } = getUserClientSession();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get?.('callbackUrl');
  const { errors, handleChange, handleSubmit } = useForm<{
    email: string;
    id: string;
    password: string;
  }>({
    initialValues: { id: '', email: '', password: '' },
    onSubmit: fields => {
      signIn(
        'email-password-credentials',
        callbackUrl
          ? {
              email: fields.email,
              password: fields.password,
              callbackUrl: `${callbackUrl}`,
            }
          : {
              email: fields.email,
              password: fields.password,
            }
      );
    },
    validate: SignUpValidation,
  });

  const isUser = !!session?.user;
  if (!isUser) {
    return (
      <RootContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="id"
              placeholder="id를 입력해주세요"
              onChange={handleChange}
            />
            <p>{errors.id}</p>
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="이메일을 입력해주세요"
            />
            <p>{errors.email}</p>
            <br />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="비밀번호를 입력해주세요"
            />
            <p>{errors.password}</p>
            <br />
          </div>
          <button
            type="button"
            onClick={() =>
              signIn(
                'kakao',
                callbackUrl
                  ? {
                      callbackUrl: `${callbackUrl}`,
                    }
                  : {}
              )
            }
          >
            Kakao Login
          </button>
          <button type="submit">Credential Login</button>
        </form>
      </RootContainer>
    );
  }
  return (
    <RootContainer>
      <p>status:{status}</p>
      <br />
      Signed in as {session?.user?.name} <br />
      <button type="button" onClick={() => signOut()}>
        Sign out
      </button>
    </RootContainer>
  );
};

export default Login;
