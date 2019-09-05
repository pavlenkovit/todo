import React, { PureComponent } from 'react';
import { IDispatchFromPropsTodoList, IStateFromPropsTodoList } from './TodoList.container';
import Form from './components/Form';

import styles from './TodoList.module.scss';
import TaskList from './components/TaskList';

export interface ITodoListProps extends IStateFromPropsTodoList, IDispatchFromPropsTodoList {
}

class TodoList extends PureComponent<ITodoListProps> {
  componentDidMount(): void {
    const { fetchTasks } = this.props;
    fetchTasks();
  };

  render() {
    const { tasks, isLoading, error } = this.props;
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div id="todo-list" className={styles.container}>
        <h1 className={styles.title}>My TODO List</h1>
        <TaskList list={tasks}/>
        <Form />
      </div>
    );
  }
}

export default TodoList;
