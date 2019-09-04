import reducer, { initialState } from './tasks'
import { FETCH_TASKS_PENDING, FETCH_TASKS_SUCCESS, FETCH_TASKS_ERROR, DELETE_TASK, ADD_TASK, TOGGLE_TASK } from '../actions';

describe('tasks reducer', () => {

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
    const initialStateWithError = {
      tasks: [],
      isLoading: true,
      error: 'Unknown error',
    };

    const action = {
      type: FETCH_TASKS_PENDING,
    };

    expect(reducer(initialStateWithError, action)).toEqual({
      ...initialStateWithError,
      isLoading: true,
      error: null,
    });
  });

  it('FETCH_TASKS_SUCCESS', () => {
    const initialState = {
      tasks: [],
      isLoading: true,
      error: null,
    };

    const action = {
      type: FETCH_TASKS_SUCCESS,
      payload: [
        { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false,
      tasks: action.payload,
    });
  });

  it('FETCH_TASKS_ERROR', () => {
    const initialState = {
      tasks: [],
      isLoading: false,
      error: null,
    };

    const action = {
      type: FETCH_TASKS_ERROR,
      payload: { error: 'Unknown error' },
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      error: 'Unknown error',
    });
  });

  it('TOGGLE_TASK', () => {
    const initialState = {
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
      isLoading: false,
      error: null,
    };

    const action = {
      type: TOGGLE_TASK,
      payload: { id: 102 },
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: true },
      ],
    });
  });

  it('DELETE_TASK', () => {
    const initialState = {
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
      isLoading: false,
      error: null,
    };

    const action = {
      type: DELETE_TASK,
      payload: { id: 101 },
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    });
  });

  it('ADD_TASK', () => {
    const initialState = {
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
      ],
      isLoading: false,
      error: null,
    };

    const action = {
      type: ADD_TASK,
      payload: { value: 'sed ab consequatur' },
    };

    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim cumque porro aperiam occaecati minima', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    });
  });

});
