import React, { FC } from 'react';
import TodoList from './components/TodoList';
import Layout from './components/Layout';

const App: FC = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
};

export default App;
