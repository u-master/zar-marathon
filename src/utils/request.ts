import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async <DataType>(endpointName: string, query: object): Promise<DataType> => {
  const endpointPath = url.format(getUrlWithParamsConfig(endpointName, query));
  const result = await fetch(endpointPath).then((response) => response.json());
  return result;
};

export default req;
