import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

async function httpGet<T = AxiosResponse>(url: string, auth?: string): Promise<T> {
  let requestConfig: AxiosRequestConfig = {};

  if (auth) {
    requestConfig = {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    };
  }

  return axios
    .get(url, requestConfig)
    .then((response) => response.data);
}

export default httpGet;
