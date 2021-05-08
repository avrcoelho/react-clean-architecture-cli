import { AxiosResponse } from 'axios';

import {
  IHttpClientDeleteDTO,
  IHttpClientGetDTO,
  IHttpClientPatchDTO,
  IHttpClientPostDTO,
  IHttpClientPutDTO,
} from '../dtos/IHttpClient.dto';

export default interface IHttpClientModel {
  get: <TResponse>(
    data: IHttpClientGetDTO,
  ) => Promise<AxiosResponse<TResponse>>;
  post: <TResponse>(
    data: IHttpClientPostDTO,
  ) => Promise<AxiosResponse<TResponse>>;
  put: <TResponse>(
    data: IHttpClientPutDTO,
  ) => Promise<AxiosResponse<TResponse>>;
  patch: <TResponse>(
    data: IHttpClientPatchDTO,
  ) => Promise<AxiosResponse<TResponse>>;
  delete: <TResponse>(
    data: IHttpClientDeleteDTO,
  ) => Promise<AxiosResponse<TResponse>>;
}
