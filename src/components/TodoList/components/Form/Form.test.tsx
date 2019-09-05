import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Form from './Form';
import { IDispatchFromPropsForm } from './Form.container';

configure({ adapter: new Adapter() });

describe('<Form />', () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  useStateSpy.mockImplementation((value) => [value, onChange]);

  const props: IDispatchFromPropsForm = {
    addTask: () => {},
  };

  const form = shallow(<Form {...props} />);

  it('renders properly', () => {
    expect(form).toMatchSnapshot();
  });

  describe('Count Up', () => {
    it('calls setCount with count + 1', () => {
      form.find('#button').props().onClick();
      expect(setState).toHaveBeenCalledWith('');
    });
  });

});
