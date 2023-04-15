declare module '@hotel/api/session' {
  import { IUser } from '@hotel/api/user';

  export type UserSession = {
    expires?: string;
    user?: IUser;
  };
}
