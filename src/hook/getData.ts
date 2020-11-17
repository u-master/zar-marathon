import { useEffect, useState } from 'react';

import req from '../utils/request';

interface IData<DataType> {
  data: DataType | null;
  isLoading: boolean;
  isError: boolean;
}

const useData: <DataType>(endpoint: string, query: object, deps: any[]) => IData<DataType> = (
  endpoint: string,
  query: object,
  deps: any[] = [],
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { data, isLoading, isError };
};

export default useData;
