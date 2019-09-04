import { connect } from 'react-redux';

import Form from './Form';
import { addTask } from '../../../../store/actions';

export interface IDispatchFromPropsForm {
  addTask: (value: string) => void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addTask: (value: string) => dispatch(addTask({ value })),
  };
};

export default connect<null, IDispatchFromPropsForm, void>(
  null, mapDispatchToProps
)(Form);
