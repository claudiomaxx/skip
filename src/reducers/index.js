import { combineReducers } from "redux";

import TaskListReducer from './reducer_task_list';
import TaskSelectedReducer from './reducer_task_selected';

export default combineReducers({
    taskList: TaskListReducer,
    taskSelected: TaskSelectedReducer
});