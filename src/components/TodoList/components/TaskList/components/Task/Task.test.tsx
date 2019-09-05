import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task, { ITaskProps } from './Task';

configure({ adapter: new Adapter() });

describe('Task', () => {
  const props: ITaskProps = {
    userId: 1,
    id: 101,
    title: 'explicabo enim',
    completed: false,
    onDelete: () => {},
    onToggle: () => {},
  };
  const wrapper = shallow(<Task {...props} />);

  it('renders properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('title', () => {
    expect(
      wrapper
        .find('.title')
        .first()
        .text()
    ).toEqual(props.title);
  });
});
