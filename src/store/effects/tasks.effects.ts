import { fetchTasksError, fetchTasksPending, fetchTasksSuccess } from '../actions/tasks';
import { getTasksService } from '../services/tasks.service';

export const getTasks = () => {
  return (dispatch: any) => {
    dispatch(fetchTasksPending());

    getTasksService().subscribe(
      res => dispatch(fetchTasksSuccess(res)),
      error => dispatch(fetchTasksError(error)),
    );
  };
};
