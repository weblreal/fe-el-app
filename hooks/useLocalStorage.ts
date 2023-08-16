import { useState, useEffect } from "react";

type LocalStorageHook<T> = [T | undefined, (value: T) => void];

function useLocalStorage<T>(
  key: string,
  initialValue?: T
): LocalStorageHook<T> {
  const [value, setValue] = useState<T | undefined>(() => {
    try {
      const item = globalThis?.window?.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      if (globalThis?.window) {
        if (value === undefined) {
          globalThis?.window.localStorage.removeItem(key);
        } else {
          globalThis?.window.localStorage.setItem(key, JSON.stringify(value));
        }
      }
    } catch (error) {
      console.error(error);
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
