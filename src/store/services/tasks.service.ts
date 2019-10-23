import Axios from 'axios-observable';
import { map } from 'rxjs/operators';

export const getTasksService = () => {
  return Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .pipe(map((data: any) => data.data));
};
