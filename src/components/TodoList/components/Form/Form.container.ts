import { connect } from 'react-redux';

import Form from './Form';
import { addTask } from '../../../../store/actions/tasks';

export interface IDispatchFromPropsForm {
  addTask: (value: string) => void;
}

const mapDispatchToProps = { addTask };

export default connect<null, IDispatchFromPropsForm, void>(
  null, mapDispatchToProps,
)(Form);
