import {
  ICreateTodoListUsecase,
  ICreateTodoListUsecaseArgs,
} from '@/domain/usecases/ICreateTodoList.usecase';
import ICacheModel from '@/infrastructure/cache/models/ICache.model';
import IHttpClientModel from '@/infrastructure/http/httpClient/models/IHttpClient.model';
import ITodoModel from '@/domain/models/ITodo.model';
import { Either, right } from '@/shared/Either';

class CreateTodoListUsecase implements ICreateTodoListUsecase {
  constructor(
    private readonly cache: ICacheModel,
    private readonly httpClient: IHttpClientModel,
  ) {}

  async execute(
    args: ICreateTodoListUsecaseArgs,
  ): Promise<Either<never, ITodoModel>> {
    const { data } = await this.httpClient.post<ITodoModel>({
      url: '/todo-list',
      data: args,
    });

    const parsedData = JSON.stringify(data);
    this.cache.save('todolist', parsedData);

    return right(data);
  }
}

export default CreateTodoListUsecase;
