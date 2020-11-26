/* eslint-disable no-param-reassign */
// import url from 'url';
import config from '../config';

const getUrlWithParamsConfig = (endpointName: string, query: any) => {
  const url = {
    ...config.client.server,
    ...(config.client.endpoint as any)[endpointName].uri,
    query: {},
  };

  const pathname = Object.keys(query).reduce((acc, key) => {
    if (acc.indexOf(`{${key}}`) !== -1) {
      const result = acc.replace(`{${key}}`, query[key]);
      delete query[key];
      return result;
    }
    return acc;
  }, url.pathname);

  url.pathname = pathname;
  url.query = { ...query };

  return url;
};

export default getUrlWithParamsConfig;
