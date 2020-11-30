import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => {
      clearInterval(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounced;
};

export default useDebounce;
