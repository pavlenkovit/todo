import { fetchTasksPending, fetchTasksSuccess } from './tasks';
import { FETCH_TASKS_PENDING, FETCH_TASKS_SUCCESS } from '../constants/tasks';

describe('TaskList actions', () => {

  it('fetchTasksPending', () => {
    expect(fetchTasksPending()).toEqual({
      type: FETCH_TASKS_PENDING,
    });
  });

  it('fetchTasksSuccess', () => {
    const expectedAction = {
      type: FETCH_TASKS_SUCCESS,
      payload: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    };
    expect(fetchTasksSuccess(expectedAction.payload)).toEqual(expectedAction)
  });

});
