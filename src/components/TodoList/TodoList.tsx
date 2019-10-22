import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { IDispatchFromPropsTodoList, IStateFromPropsTodoList } from './TodoList.container';
import Form from './components/Form';

import TaskList from './components/TaskList';

export interface ITodoListProps extends IStateFromPropsTodoList, IDispatchFromPropsTodoList {
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin: 15px 0;
`;


const TodoList: FC<ITodoListProps> = ({ tasks, isLoading, error, fetchTasks }) => {
  useEffect(() => {
    fetchTasks();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container id="todo-list">
      <Title>My TODO List</Title>
      <TaskList list={tasks} />
      <Form />
    </Container>
  );
};

export default TodoList;
