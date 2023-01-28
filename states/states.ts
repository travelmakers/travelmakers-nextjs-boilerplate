import { atom } from 'recoil';

const nameState = atom({
  key: 'nameState',
  default: 'sgd',
});

export { nameState };
