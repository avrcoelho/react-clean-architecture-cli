import axios, { AxiosInstance, AxiosResponse } from 'axios';

import {
  IHttpClientDeleteDTO,
  IHttpClientGetDTO,
  IHttpClientPatchDTO,
  IHttpClientPostDTO,
  IHttpClientPutDTO,
} from '../dtos/IHttpClient.dto';
import IHttpClientModel from '../models/IHttpClient.model';

class AxiosHttpClient implements IHttpClientModel {
  private readonly baseUrl: string | undefined;

  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({});
    this.baseUrl = process.env.API_URL;
  }

  public get<TResponse>({
    url,
    params = null,
    headers = null,
  }: IHttpClientGetDTO): Promise<AxiosResponse<TResponse>> {
    return this.axiosInstance({
      method: 'GET',
      url: `${this.baseUrl}${url}`,
      params,
      headers,
    });
  }

  public post<TResponse>({
    url,
    params = null,
    data = null,
    headers = null,
  }: IHttpClientPostDTO): Promise<AxiosResponse<TResponse>> {
    return this.axiosInstance({
      method: 'POST',
      url: `${this.baseUrl}${url}`,
      params,
      data,
      headers,
    });
  }

  public put<TResponse>({
    url,
    params = null,
    data = null,
    headers = null,
  }: IHttpClientPutDTO): Promise<AxiosResponse<TResponse>> {
    return this.axiosInstance({
      method: 'PUT',
      url: `${this.baseUrl}${url}`,
      params,
      data,
      headers,
    });
  }

  public patch<TResponse>({
    url,
    params = null,
    data = null,
    headers = null,
  }: IHttpClientPatchDTO): Promise<AxiosResponse<TResponse>> {
    return this.axiosInstance({
      method: 'PUT',
      url: `${this.baseUrl}${url}`,
      params,
      data,
      headers,
    });
  }

  public delete<TResponse>({
    url,
    params = null,
    headers = null,
  }: IHttpClientDeleteDTO): Promise<AxiosResponse<TResponse>> {
    return this.axiosInstance({
      method: 'DELETE',
      url: `${this.baseUrl}${url}`,
      params,
      headers,
    });
  }
}

export default AxiosHttpClient;
