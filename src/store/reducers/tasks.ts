import { handleActions } from 'redux-actions';
import { GetTasks, ToggleTask, AddTask, DeleteTask } from '../actions/tasks';

export interface ITask {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface ITasksState {
  tasks: ITask[];
  isLoading: boolean;
  error: null | string;
}

export const initialState: ITasksState = {
  tasks: [],
  isLoading: false,
  error: null,
};

export default handleActions({
  [GetTasks.Pending](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  },

  [GetTasks.Success](state: ITasksState, { payload }: any) {
    const { tasks } = payload;
    return {
      ...state,
      isLoading: false,
      tasks,
    };
  },

  [GetTasks.Error](state: ITasksState, { payload }: any) {
    const { error } = payload;
    return {
      ...state,
      isLoading: false,
      error,
    };
  },

  [ToggleTask.Success](state: ITasksState, { payload }: any) {
    const { id } = payload;
    return {
      ...state,
      tasks: state.tasks.map(task => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    };
  },

  [AddTask.Success](state: ITasksState, { payload }: any) {
    const { value } = payload;
    const { tasks } = state;
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    return {
      ...state,
      tasks: tasks.concat([
        {
          userId: 1,
          id: lastId + 1,
          title: value,
          completed: false,
        },
      ]),
    };
  },

  [DeleteTask.Success](state: ITasksState, { payload }: any) {
    const { id } = payload;
    return {
      ...state,
      tasks: state.tasks.filter(task => {
        if (task.id !== id) {
          return task;
        }
        return null;
      }),
    };
  },

}, initialState);
