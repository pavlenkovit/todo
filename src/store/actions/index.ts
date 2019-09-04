export const FETCH_TASKS_PENDING = 'FETCH_TASKS_PENDING';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_ERROR = 'FETCH_TASKS_ERROR';

export const TOGGLE_TASK = 'TOGGLE_TASK';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export interface IAction {
  type: string;
  payload?: any;
}

export const fetchTasksPending = () => ({
  type: FETCH_TASKS_PENDING,
});

export const fetchTasksSuccess = (payload: any) => ({
  type: FETCH_TASKS_SUCCESS,
  payload,
});

export const fetchTasksError = (payload: any) => ({
  type: FETCH_TASKS_ERROR,
  payload,
});

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
