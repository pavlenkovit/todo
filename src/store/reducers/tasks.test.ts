import reducer, { initialState } from './tasks'
import { FETCH_TASKS_PENDING, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, DELETE_TASK, ADD_TASK, TOGGLE_TASK } from '../constants/tasks';

describe('Tasks reducer', () => {

  it('FETCH_TASKS_PENDING after situation without error', () => {
    const action = {
      type: FETCH_TASKS_PENDING,
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: true,
      error: null,
    })
  });

  it('FETCH_TASKS_PENDING after error', () => {
    const stateBefore = {
      tasks: [],
      isLoading: true,
      error: '500 server error',
    };

    const action = {
      type: FETCH_TASKS_PENDING,
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: true,
      error: null,
    });
  });

  it('FETCH_TASKS_SUCCESS', () => {
    const stateBefore = {
      tasks: [],
      isLoading: true,
      error: null,
    };

    const action = {
      type: FETCH_TASKS_SUCCESS,
      payload: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      tasks: action.payload,
    });
  });

  it('FETCH_TASKS_ERROR', () => {
    const stateBefore = {
      tasks: [],
      isLoading: true,
      error: null,
    };

    const action = {
      type: FETCH_TASKS_ERROR,
      payload: { error: '500 server error' },
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      isLoading: false,
      error: action.payload.error,
    });
  });

  it('TOGGLE_TASK', () => {
    const stateBefore = {
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
      isLoading: false,
      error: null,
    };

    const action = {
      type: TOGGLE_TASK,
      payload: { id: 102 },
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: true },
      ],
    });
  });

  it('DELETE_TASK', () => {
    const stateBefore = {
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
      isLoading: false,
      error: null,
    };

    const action = {
      type: DELETE_TASK,
      payload: { id: 101 },
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      tasks: [
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    });
  });

  it('ADD_TASK', () => {
    const stateBefore = {
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
      ],
      isLoading: false,
      error: null,
    };

    const action = {
      type: ADD_TASK,
      payload: { value: 'sed ab consequatur' },
    };

    expect(reducer(stateBefore, action)).toEqual({
      ...stateBefore,
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    });
  });

});
