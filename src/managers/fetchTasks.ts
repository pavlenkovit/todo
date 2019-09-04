import { fetchTasksPending, fetchTasksSuccess, fetchTasksError } from '../store/actions';

const fetchTasks = () => {
  return (dispatch: any) => {
    dispatch(fetchTasksPending());
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=30')
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

export default fetchTasks;
