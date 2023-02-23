/* eslint-disable import/no-duplicates */

/* eslint-disable no-unused-vars */
import 'next-auth';
import NextAuth from 'next-auth';
import * as auth from 'next-auth';

import { IUser } from './api.user';

// import * as client from 'next-auth/client'
// import 'next-auth/client'

declare module 'next-auth' {
  export * from 'next-auth';
  export type InitOptions = auth.InitOptions;
  export default NextAuth;
  export interface Session {
    user?: IUser | null;
  }
}

declare module 'next-auth/client' {
  export * from 'next-auth/client';

  export interface Session {
    user?: IUser | null;
  }
}
