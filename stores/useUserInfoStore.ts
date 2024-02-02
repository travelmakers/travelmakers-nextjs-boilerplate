import type { IUser } from '@api/user';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface UserInfoState {
  userInfo?: IUser;
}

interface UserInfoActions {
  setUserInfo: (userinfo: IUser) => void;
  deleteUserInfo: () => void;
}

const useAuthStore = create<UserInfoState & UserInfoActions>()(
  devtools((set) => ({
    userInfo: undefined,
    setUserInfo: (userInfo: IUser) => {
      set({ userInfo });
    },
    deleteUserInfo: () => {
      set({ userInfo: undefined });
    },
  }))
);

const initializeUserInfo = (userInfo: IUser) => {
  useAuthStore.setState((state) => ({ ...state, userInfo }));
};

export const useUserInfoStore = () => {
  return {
    store: useAuthStore(),
    initializeUserInfo,
  };
};
