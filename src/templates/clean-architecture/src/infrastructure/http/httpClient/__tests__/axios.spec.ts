import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Axios from '../implementation/Axios';

let axios: Axios;

const BASE_URL = process.env.API_URL;

const server = setupServer(
  rest.get(`${BASE_URL}/`, (req, res, ctx) => {
    return res(ctx.json(['a', 'b', 'c']));
  }),
  rest.post(`${BASE_URL}/`, (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
  rest.put(`${BASE_URL}/`, (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
  rest.patch(`${BASE_URL}/`, (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
  rest.delete(`${BASE_URL}/`, (req, res, ctx) => {
    return res(ctx.json({ success: true }));
  }),
);

describe('Axios', () => {
  beforeAll(() => server.listen());

  beforeEach(() => {
    axios = new Axios();
  });

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should be able to return data on method GET', async () => {
    const { data } = await axios.get({ url: '/' });

    expect(data).toEqual(['a', 'b', 'c']);
  });

  it('should be able to return data on method POST', async () => {
    const { data } = await axios.post({ url: '/' });

    expect(data).toEqual({ success: true });
  });

  it('should be able to return data on method PUT', async () => {
    const { data } = await axios.put({ url: '/' });

    expect(data).toEqual({ success: true });
  });

  it('should be able to return data on method PATCH', async () => {
    const { data } = await axios.patch({ url: '/' });

    expect(data).toEqual({ success: true });
  });

  it('should be able to DELETE', async () => {
    const { data } = await axios.delete({ url: '/' });

    expect(data).toEqual({ success: true });
  });
});
