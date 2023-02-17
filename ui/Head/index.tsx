'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

import { Container, HeadBox } from './styles';

const Head = () => {
  const { status } = useSession();
  return (
    <>
      <Container>
        <div>
          <Link href="/">Logo</Link>
        </div>
        <div>{status}</div>
      </Container>
      <HeadBox>
        <ul>
          <li>
            <Link href="/auth/login">로그인 페이지</Link>
          </li>
          <li>
            <Link href="/query">react-query 페이지</Link>
          </li>
        </ul>
      </HeadBox>
    </>
  );
};

export default Head;
