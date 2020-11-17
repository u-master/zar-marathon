import { useState } from 'react';

import req from '../utils/request';

interface IData<DataType> {
  data: DataType | null;
  isLoading: boolean;
  isError: boolean;
}

const useData: <DataType>(endpoint: string) => IData<DataType> = (endpoint: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const getData = async () => {
    try {
      const result = await req(endpoint);
      setData(result);
    } catch (e) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  getData();
  return { data, isLoading, isError };
};

export default useData;
