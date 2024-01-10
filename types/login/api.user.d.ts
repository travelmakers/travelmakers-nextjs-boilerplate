declare module '@api/user' {
  import type { User } from 'next-auth';

  export interface IUser extends User {
    accessToken: string;
    id: number;
    name: string;
    nick_name: string;
    email: string;
  }

  export type UserStatus = {
    type: string;
    status: string;
    data: {
      user: IUser;
    };
  };
}
