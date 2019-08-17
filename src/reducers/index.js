import { combineReducers } from 'redux';
import taskReducer from './Task';

const myReducer =  combineReducers({
  task: taskReducer
});

export default myReducer;
