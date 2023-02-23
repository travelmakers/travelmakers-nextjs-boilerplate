import { IUser } from '@/types/api.user';

export type UserSession = {
  expires?: string;
  user?: IUser;
};
