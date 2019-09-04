import { fetchTasksPending } from './tasks';
import { FETCH_TASKS_PENDING } from '../constants/tasks';

describe('Task actions', () => {
  it('fetchTasksPending', () => {
    expect(fetchTasksPending()).toEqual({
      type: FETCH_TASKS_PENDING,
    })
  });
});

// 42:00
