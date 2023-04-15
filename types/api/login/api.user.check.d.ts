declare module '@hotel/api/user-check' {
  import { IUser } from '@hotel/api/user';

  export type UserStatus = {
    data: {
      user: IUser;
    };
  };
}
