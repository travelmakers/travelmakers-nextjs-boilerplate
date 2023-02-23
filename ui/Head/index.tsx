'use client';

import Logo from '@/styles/assets/icon/logo.svg';
import Link from 'next/link';
import React from 'react';

import { Container, HeadBox } from './styles';

const Head = () => (
  <>
    <Container>
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div>111</div>
    </Container>
    <HeadBox>
      <ul>
        <li>
          <Link href="/auth/login">로그인 페이지</Link>
        </li>
        <li>
          <Link href="/main">main 페이지</Link>
        </li>
      </ul>
    </HeadBox>
  </>
);

export default Head;
