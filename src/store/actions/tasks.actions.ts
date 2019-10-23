import { createActions } from 'redux-actions';
import { ITask } from '../reducers/tasks.reducers';

export enum GetTasks {
  Pending = '[Pending] Получение списка задач',
  Success = '[Success] Получение списка задач',
  Error = '[Error] Получение списка задач',
}

export enum ToggleTask {
  Success = '[Success] Переключение статуса задачи',
}

export enum AddTask {
  Success = '[Success] Добавление задачи',
}

export enum DeleteTask {
  Success = '[Success] Удаление задачи',
}

createActions({
  [GetTasks.Pending]: undefined,
  [GetTasks.Success]: (tasks: ITask[]) => ({ tasks }),
  [GetTasks.Error]: (error: string) => ({ error }),

  [ToggleTask.Success]: (id: number) => ({ id }),
  [AddTask.Success]: (value: string) => ({ value }),
  [DeleteTask.Success]: (id: number) => ({ id }),
});
