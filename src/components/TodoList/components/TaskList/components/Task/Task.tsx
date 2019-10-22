import React from 'react';
import styled from 'styled-components';

import { ITask } from '../../../../../../models/tasks';
import { IDispatchFromPropsTask } from './Task.container';
import ButtonDelete from './components/ButtonDelete';
import Checkbox from './components/Checkbox';

export interface ITaskProps extends ITask, IDispatchFromPropsTask {
}

interface IItemProps {
  completed: boolean;
}

const Item = styled.li<IItemProps>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 0 -15px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 2px;
  text-decoration: ${(props: IItemProps) => (props.completed ? 'line-through' : 'none')};
  &:hover {
    background: #cbcbcb;
  }
`;

const Title = styled.div`
  flex: 1 1 auto;
`;

const Task: React.FC<ITaskProps> = ({ id, title, completed, toggleTask, deleteTask }) => {
  const handleClickOnItem = () => {
    toggleTask(id);
  };

  const handleClickOnDeleteButton = () => {
    deleteTask(id);
  };

  return (
    <Item completed={completed} onClick={handleClickOnItem}>
      <Checkbox completed={completed} />
      <Title>{title}</Title>
      <ButtonDelete onClick={handleClickOnDeleteButton} />
    </Item>
  );
};

export default Task;
