// custom hook to fetch instruments from the API
import { useState, useEffect, useRef } from 'react';

type Cache<T> = { [key: string]: T[] };

type state = {
  data: Instrument[] | null;
  loading: boolean;
  error: Error | null;
};

const useDrumkit = (queryString: string) => {
  const cache = useRef<Cache<Instrument>>({});
  const [state, setState] = useState<state>({
    data: null,
    loading: true,
    error: null,
  });

  const url = `/data/${queryString}.json`;

  const getDrumKit = async () => {
    const newState = { ...state };

    try {
      let data;

      if (cache.current.queryString) {
        data = cache.current.queryString;
      } else {
        const response = await fetch(url);
        if (!response.ok) throw new Error('No data found!');

        data = await response.json() satisfies Instrument[];
        cache.current.queryString = data;
      }

      newState.data = data;
    } catch (error) {
      newState.error = error as Error;
    } finally {
      newState.loading = false;
      setState(newState);
    }
  };

  useEffect(() => {
    getDrumKit();
  }, [queryString]);

  return state;
}

export default useDrumkit;
