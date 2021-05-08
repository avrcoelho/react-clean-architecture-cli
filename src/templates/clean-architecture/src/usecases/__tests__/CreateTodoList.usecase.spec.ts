import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Localstorage from '@/infrastructure/cache/inMemory/LocalStorage';
import AxiosHttpClient from '@/infrastructure/http/httpClient/implementation/Axios';
import CreateTodoListUsecase from '../CreateTodoList.usecase';

let createTodoListUsecase: CreateTodoListUsecase;
let localstorage: Localstorage;
let httpClient: AxiosHttpClient;
const { API_URL } = process.env;

const data = {
  id: '123',
  title: 'Create project',
};
const server = setupServer(
  rest.post(`${API_URL}/todo-list`, (req, res, ctx) => {
    return res(ctx.json(data));
  }),
);

describe('CreateTodoList usecase', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  beforeEach(() => {
    localstorage = new Localstorage();
    httpClient = new AxiosHttpClient();
    createTodoListUsecase = new CreateTodoListUsecase(localstorage, httpClient);
  });

  it('should be able to create', async () => {
    const response = await createTodoListUsecase.execute({
      title: data.title,
    });

    expect(response.value).toEqual(data);
  });
});
