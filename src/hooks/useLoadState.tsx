import { useState } from 'react';

export const useLoadState = () => {
  const [isBlank, setBlank] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [isError, setError] = useState(false);

  const wrapLoad = async (fn: any) => {
    setBlank(true);
    setLoading(true);
    setLoaded(false);
    setError(false);

    try {
      const result = await fn();
      setLoading(false);
      setLoaded(true);
      return result;
    } catch (error) {
      setError(true);
      setLoading(false);
      setLoaded(false);
      throw error;
    } finally {
      setBlank(false);
    }
  };

  const reset = () => {
    setBlank(true);
    setLoading(false);
    setLoaded(false);
    setError(false);
  };

  return {
    isBlank,
    isLoading,
    isLoaded,
    isError,
    wrapLoad,
    reset,
  };
};
