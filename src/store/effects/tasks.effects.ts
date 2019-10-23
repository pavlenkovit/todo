import { catchError, map, switchMap } from 'rxjs/operators';
import { ActionsObservable, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { Action } from 'redux-actions';

import { getTasks } from '../services/tasks.service';
import { GetTasks } from '../actions/tasks';

/** Эффект получения списка задач */
export const getTasks$ = (actions$: ActionsObservable<Action<undefined>>) => {
  return actions$.pipe(
    ofType(GetTasks.Pending),
    switchMap(() => {
      return getTasks().pipe(
        map(data => {
          return {
            type: GetTasks.Success,
            payload: { tasks: data },
          };
        }),
        catchError((error: string) => {
          return of({
            type: GetTasks.Error,
            payload: { error },
          });
        }),
      );
    }),
  );
};
