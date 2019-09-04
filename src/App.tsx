import React from 'react';
import TodoList from './components/TodoList';
import Layout from './components/Layout';

const App: React.SFC = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
};

export default App;
