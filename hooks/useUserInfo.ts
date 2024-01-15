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

const useUserInfo = create<UserInfoState & UserInfoActions>((set) => ({
  userInfo: defaultState,
  setUserInfo: (userInfo: IUser) => {
    set({ userInfo });
  },
  deleteUserInfo: () => {
    set({ userInfo: defaultState });
  },
}));

export default useUserInfo;
