import type { IUser } from '@api/user';

import { create } from 'zustand';

interface UserInfoState {
  userInfo: IUser;
}

interface UserInfoActions {
  setUserInfo: (userinfo: IUser) => void;
  deleteUserInfo: () => void;
}

const defaultState = { id: undefined, name: '', email: '' };

export const useUserInfoStore = create<UserInfoState & UserInfoActions>(
  (set) => ({
    userInfo: defaultState,
    setUserInfo: (userInfo: IUser) => {
      set({ userInfo });
    },
    deleteUserInfo: () => {
      set({ userInfo: defaultState });
    },
  })
);

export const initializeUserInfo = (userInfo: IUser) => {
  useUserInfoStore.setState({ ...defaultState, userInfo });
};
