import { createAction } from 'redux-actions';

import { ITask } from '../../models/tasks';

export const fetchTasksPending = createAction('FETCH_TASKS_PENDING');
export const fetchTasksSuccess = createAction('FETCH_TASKS_SUCCESS', (tasks: ITask[]) => ({ tasks }));
export const fetchTasksError = createAction('FETCH_TASKS_ERROR', (payload: any) => payload);
export const toggleTask = createAction('TOGGLE_TASK', (id: number) => ({ id }));
export const addTask = createAction('ADD_TASK', (value: string) => ({ value }));
export const deleteTask = createAction('DELETE_TASK', (id: number) => ({ id }));
