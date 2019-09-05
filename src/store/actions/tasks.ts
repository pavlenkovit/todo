import {
  FETCH_TASKS_PENDING,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_ERROR,
  TOGGLE_TASK,
  ADD_TASK,
  DELETE_TASK,
} from '../constants/tasks';
import { ITask } from '../../models/tasks';

export const fetchTasksPending = () => ({
  type: FETCH_TASKS_PENDING,
});

export const fetchTasksSuccess = (payload: ITask[]) => ({
  type: FETCH_TASKS_SUCCESS,
  payload,
});

export const fetchTasksError = (payload: any) => ({
  type: FETCH_TASKS_ERROR,
  payload,
});

export const getTasks = () => {
  return (dispatch: any) => {
    dispatch(fetchTasksPending());
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error);
        }
        dispatch(fetchTasksSuccess(res));
        return res;
      })
      .catch(error => {
        dispatch(fetchTasksError(error));
      });
  };
};

export const toggleTask = (payload: any) => ({
  type: TOGGLE_TASK,
  payload,
});

export const addTask = (payload: any) => ({
  type: ADD_TASK,
  payload,
});

export const deleteTask = (payload: any) => ({
  type: DELETE_TASK,
  payload,
});
