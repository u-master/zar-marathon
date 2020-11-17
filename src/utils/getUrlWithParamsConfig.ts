// import url from 'url';
import config from '../config';

const getUrlWithParamsConfig = (endpointName: string) => {
  return {
    ...config.client.server,
    ...(config.client.endpoint as any)[endpointName].uri,
  };
};

export default getUrlWithParamsConfig;
