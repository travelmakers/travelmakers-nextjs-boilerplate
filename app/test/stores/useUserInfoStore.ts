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

const useStore = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: IUser) => {
    set({ userInfo });
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultState });
  },
}));

const initializeUserInfo = (userInfo: IUser) => {
  useStore.setState({ ...defaultState, userInfo });
};

export const useUserInfoStore = () => {
  return {
    store: useStore(),
    initializeUserInfo,
  };
};
