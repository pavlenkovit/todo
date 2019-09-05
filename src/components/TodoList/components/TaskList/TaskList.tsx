import React from 'react';
import styles from './TaskList.module.scss';
import { ITask } from '../../../../models/tasks';
import Task from './components/Task';

export interface ITaskListProps {
  list: ITask[];
}

const TaskList: React.SFC<ITaskListProps> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.slice(0).reverse().map((task: ITask) => (
        <Task key={task.id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
