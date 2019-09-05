import {
  FETCH_TASKS_PENDING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  TOGGLE_TASK,
  ADD_TASK,
  DELETE_TASK,
} from '../constants/tasks';
import { IAction } from '../models/actions';
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

export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_TASKS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_TASKS_SUCCESS:
      const { payload } = action;
      return {
        ...state,
        isLoading: false,
        tasks: payload,
      };
    case FETCH_TASKS_ERROR:
      const { payload: { error } } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return { ...task, completed: !task.completed };
          }
          return task;
        }),
      };
    case ADD_TASK:
      const { payload: { value } } = action;
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
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => {
          if (task.id !== action.payload.id) {
            return task;
          }
          return null;
        }),
      };
    default:
      return state;
  }
}
