import url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

const req = async (endpointName: string) => {
  const endpointPath = url.format(getUrlWithParamsConfig(endpointName));
  const result = await fetch(endpointPath).then((response) => response.json());
  return result;
};

export default req;
