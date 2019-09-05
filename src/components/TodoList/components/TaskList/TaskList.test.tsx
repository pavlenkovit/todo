import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskList, { ITaskListProps } from './TaskList';

configure({ adapter: new Adapter() });

describe('TaskList', () => {
  const props: ITaskListProps = {
    list: [
      { userId: 1, id: 101, title: 'explicabo enim', completed: false },
      { userId: 1, id: 102, title: 'sed ab consequatur', completed: false },
    ],
  };
  const wrapper = shallow(<TaskList {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('renders 2 task', () => {
    expect(wrapper.find('Connect(Task)')).toHaveLength(2);
  });
});
