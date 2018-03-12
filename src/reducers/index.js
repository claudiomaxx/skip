import { combineReducers } from 'redux';

import { reducer as FormReducer } from 'redux-form';

import ReducerTask from './reducer_task';
import ReducerDepartment from './reducer_department';

export default combineReducers({
    taskList: ReducerTask,
    departmentList: ReducerDepartment,
    form: FormReducer
});