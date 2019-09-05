import React from 'react';
import cn from 'classnames';

import styles from './Task.module.scss';
import { ITask } from '../../../../../../models/tasks';
import { IDispatchFromPropsTask } from './Task.container';
import CheckMark from '../../../../../../icons/CheckMark';
import Close from '../../../../../../icons/Close';

export interface ITaskProps extends ITask, IDispatchFromPropsTask {
}

const Task: React.SFC<ITaskProps> = ({ id, title, completed, onToggle, onDelete }) => {
  const handleClickOnItem = () => {
    onToggle(id);
  };

  const handleClickOnDeleteButton = () => {
    onDelete(id);
  };

  return (
    <li className={cn(styles.item, { [styles.completed]: completed })} onClick={handleClickOnItem}>
      <div className={styles.checkbox}>
        <CheckMark />
      </div>
      <div className={styles.title}>{title}</div>
      <button className={styles.delete} onClick={handleClickOnDeleteButton}>
        <Close />
      </button>
    </li>
  );
};

export default Task;
