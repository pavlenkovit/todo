import { connect } from 'react-redux';

import Task from './Task';
import { deleteTask, toggleTask } from '../../../../store/actions/tasks';

export interface IDispatchFromPropsTask {
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onToggle: (id: number) => dispatch(toggleTask({ id })),
    onDelete: (id: number) => dispatch(deleteTask({ id })),
  };
};

export default connect<null, IDispatchFromPropsTask, void>(
  null, mapDispatchToProps
)(Task);
