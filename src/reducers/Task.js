import * as types from './../constants/ActionType';

var initState = {
  submit_name: 'Add Task',
  list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [],
};

var taskReducer = (state = initState, action) => {
  switch(action.type) {
    case types.LIST_ALL:
      return state;
    case types.ADD_TASK:
      console.log(action);
      let ltasks = JSON.parse(localStorage.getItem('list'));
      ltasks.push(action.task);
      localStorage.setItem('list', JSON.stringify(ltasks));
      state.list = ltasks;
      return {...state};  
    case types.DEL_TASK:
      let list_tasks = JSON.parse(localStorage.getItem('list'));
      list_tasks.splice(action.id, 1);
      localStorage.setItem('list', JSON.stringify(list_tasks));
      state.list = list_tasks;
      return {...state};
    default: return state;
  }

}

export default taskReducer;
