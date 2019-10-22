import { connect } from 'react-redux';

import Task from './Task';
import { deleteTask, toggleTask } from '../../../../../../store/actions/tasks';

export interface IDispatchFromPropsTask {
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const mapDispatchToProps = { toggleTask, deleteTask };

export default connect<null, IDispatchFromPropsTask, void>(
  null, mapDispatchToProps,
)(Task);
