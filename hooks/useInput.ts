import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

type ReturnTypes<T> = [
  T,
  // eslint-disable-next-line no-unused-vars
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>
];

function useInput<T>(initialData: T): ReturnTypes<T> {
  const [value, setValue] = useState(initialData);
  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value as unknown as T);
    },
    []
  );
  return [value, handler, setValue];
}

export default useInput;
