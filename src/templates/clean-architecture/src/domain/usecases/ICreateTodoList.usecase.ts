import { Either } from '@/shared/Either';
import ITodoModel from '../models/ITodo.model';

export interface ICreateTodoListUsecaseArgs {
  title: string;
}

export interface ICreateTodoListUsecase {
  execute: (
    args: ICreateTodoListUsecaseArgs,
  ) => Promise<Either<never, ITodoModel>>;
}
