import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../../../models/tasks';
import Task from './components/Task';

export interface ITaskListProps {
  list: ITask[];
}

const List = styled.ul`
  flex: 1 1 auto;
  height: 1%;
  overflow: auto;
  margin: 0 -15px;
  padding: 0 15px;
`;

const TaskList: React.FC<ITaskListProps> = ({ list }) => {
  return (
    <List>
      {list.slice(0).reverse().map((task: ITask) => (
        <Task
          key={task.id}
          {...task}
        />
      ))}
    </List>
  );
};

export default TaskList;
