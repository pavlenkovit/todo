import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTasks } from 'store/actions/tasks';

import TodoList from './TodoList';

import { IStateTasksReducer } from '../../store/reducers/tasks';

export interface IStateFromPropsTodoList extends IStateTasksReducer {
}

export interface IDispatchFromPropsTodoList {
  fetchTasks: () => void;
}

const mapStateToProps = (state: any) => {
  const { tasks } = state;
  return tasks;
};

const mapDispatchToProps = (dispatch: any): IDispatchFromPropsTodoList => bindActionCreators({
  fetchTasks: getTasks,
}, dispatch);

export default connect<IStateFromPropsTodoList, IDispatchFromPropsTodoList, void>(
  mapStateToProps, mapDispatchToProps
)(TodoList);
