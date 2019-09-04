import React, { PureComponent } from 'react';

import { IDispatchFromPropsTodoList, IStateFromPropsTodoList } from './TodoList.container';
import { ITask } from '../../models/tasks';
import Task from './componentns/Task';
import Form from './componentns/Form';

import styles from './TodoList.module.scss';

interface IProps extends IStateFromPropsTodoList, IDispatchFromPropsTodoList {
}

class TodoList extends PureComponent<IProps> {
  componentDidMount(): void {
    const { fetchTasks } = this.props;
    fetchTasks();
  };

  render() {
    const { tasks, isLoading, error } = this.props;
    if (isLoading) {
      return 'Loading...';
    }

    if (error) {
      return error;
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>My TODO List</h1>
        <ul className={styles.list}>
          {tasks.map((task: ITask) => (
            <Task key={task.id} {...task} />
          ))}
        </ul>
        <Form />
      </div>
    );
  }
}

export default TodoList;
