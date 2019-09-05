import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import TodoList, { ITodoListProps } from './TodoList';

configure({ adapter: new Adapter() });

describe('TodoList', () => {

  const props: ITodoListProps = {
    tasks: [],
    isLoading: false,
    error: null,
    fetchTasks: () => {},
  };

  describe('TodoList initial', () => {
    const mockFetchGetTasks = jest.fn();
    const nextProps = {
      ...props,
      fetchTasks: mockFetchGetTasks,
    };
    const wrapper = shallow(<TodoList {...nextProps} />);

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('dispatches the `fetchTasks()` method it receives from props', () => {
      expect(mockFetchGetTasks).toHaveBeenCalledTimes(1);
    });
  });

  describe('TodoList isLoading', () => {
    const nextProps: ITodoListProps = {
      ...props,
      isLoading: true,
    };

    const wrapper = shallow(<TodoList { ...nextProps } />);

    it('renders preloader', () => {
      expect(wrapper.find('p').text()).toEqual('Loading...');
    });

    it('render only one <p>', () => {
      expect(wrapper.find('p')).toHaveLength(1);
    });

    it('not render <NewsList />', () => {
      expect(wrapper.find('#todo-list')).toHaveLength(0);
    });


    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('TodoList render <TodoList />', () => {
    const nextProps: ITodoListProps = {
      ...props,
      tasks: [
        { userId: 1, id: 101, title: 'explicabo enim', completed: false },
        { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
      ],
    };

    const wrapper = shallow(<TodoList { ...nextProps } />);

    it('renders <TodoList /> template', () => {
      expect(wrapper.find('#todo-list')).toHaveLength(1);
    });

    it('not render <p>', () => {
      expect(wrapper.find('p')).toHaveLength(0)
    });

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('TodoList with error', () => {
    const nextProps: ITodoListProps = {
      ...props,
      error: 'Something going wrong',
    };

    const wrapper = shallow(<TodoList { ...nextProps } />);

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('renders error', () => {
      expect(wrapper.find('p').text()).toEqual(nextProps.error);
    });
  });

});

// 28:43
// Тестирование изменения стэйта и клика по кнопке
