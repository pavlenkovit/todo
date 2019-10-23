import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TodoList from './TodoList';

import { IStateTasksReducer } from '../../store/reducers/tasks';
import { getTasks } from '../../store/effects/tasks.effects';

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
  mapStateToProps, mapDispatchToProps,
)(TodoList);
