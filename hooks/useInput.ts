import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useCallback, useState } from 'react';

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  Dispatch<SetStateAction<T>>,
];

function useInput<T>(initialData: T): ReturnTypes<T> {
  const [value, setValue] = useState(initialData);
  const handler = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if ('value' in e.target) {
        setValue(e.target.value as unknown as T);
      }
    },
    []
  );
  return [value, handler, setValue];
}

export default useInput;
