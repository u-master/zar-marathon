// import url from 'url';
import config from '../config';

const getUrlWithParamsConfig = (endpointName: string, query: object) => {
  return {
    ...config.client.server,
    ...(config.client.endpoint as any)[endpointName].uri,
    query,
  };
};

export default getUrlWithParamsConfig;
