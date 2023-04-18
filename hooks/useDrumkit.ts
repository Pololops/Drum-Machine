// custom hook to fetch instruments from the API
import { useState, useEffect, useRef } from 'react';

type Cache<T> = { [key: string]: T[] };

const useDrumkit = (queryString: string) => {
  const cache = useRef<Cache<Instrument>>({});

  const [drumkit, setDrumkit] = useState<Instrument[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getDrumKit = async () => {
    try {
      let data;
      
      if (cache.current.queryString) {
        data = cache.current.queryString;
      } else {
        setIsLoading(true);
        const url = `/data/${queryString}.json`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('No data found!');

        data = await response.json() satisfies Instrument[];
        cache.current.queryString = data;
      }

      setDrumkit(data);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      setError('Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDrumKit()
  }, [queryString]);

  return { drumkit, isLoading, error };
}

export default useDrumkit;
