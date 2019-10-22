import { handleActions } from 'redux-actions';
import { fetchTasksPending, fetchTasksSuccess, fetchTasksError, toggleTask, addTask, deleteTask } from '../actions/tasks';

import { ITask } from '../../models/tasks';

export interface IStateTasksReducer {
  tasks: ITask[];
  isLoading: boolean;
  error: null | string;
}

export const initialState: IStateTasksReducer = {
  tasks: [],
  isLoading: false,
  error: null,
};

export default handleActions({
  [fetchTasksPending.toString()](state) {
    return {
      ...state,
      isLoading: true,
      error: null,
    };
  },

  [fetchTasksSuccess.toString()](state, { payload }: any) {
    const { tasks } = payload;
    return {
      ...state,
      isLoading: false,
      tasks,
    };
  },

  [fetchTasksError.toString()](state, { payload }: any) {
    const { error } = payload;
    return {
      ...state,
      isLoading: false,
      error,
    };
  },

  [toggleTask.toString()](state, { payload }: any) {
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

  [addTask.toString()](state, { payload }: any) {
    const { value } = payload;
    const { tasks } = state;
    const lastId = tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    const concatTasks = tasks.concat([
      {
        userId: 1,
        id: lastId + 1,
        title: value,
        completed: false,
      },
    ]);
    return {
      ...state,
      tasks: concatTasks,
    };
  },

  [deleteTask.toString()](state, { payload }: any) {
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
