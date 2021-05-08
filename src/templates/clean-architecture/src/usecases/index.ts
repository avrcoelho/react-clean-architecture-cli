import httpClient from '@/infrastructure/http/httpClient';
import cache from '@/infrastructure/cache';
import CreateTodoListUsecase from './CreateTodoList.usecase';

const createTodoListUsecase = new CreateTodoListUsecase(cache, httpClient);

export { createTodoListUsecase };
