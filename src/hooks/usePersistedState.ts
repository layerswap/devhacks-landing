import { checkStorageIsAvailable, storageType } from '@/lib/storageAvailable';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type PersistedState<T> = [T, Dispatch<SetStateAction<T>>];

export type Configs = {
  alreadyFamiliarWithCoinbaseConnect?: boolean,
  connectedWallet?: {
    isConnected?: boolean;
    address?: string;
    icon?: string;
    balance?: number
  }
}

function usePersistedState<T>(defaultValue: T, key: string, type: storageType = 'localStorage'): PersistedState<T> {
  const [value, setValue] = useState<T>(() => {
    const value = checkStorageIsAvailable(type) && window[type]?.getItem(key);

    return value ? (JSON.parse(value || "null") as T) : defaultValue;
  });

  useEffect(() => {
    checkStorageIsAvailable(type) && window[type]?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export { usePersistedState };