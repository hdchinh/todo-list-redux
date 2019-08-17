import * as types from './../constants/ActionType';

export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
}

export const onAddTask = (task) => {
  return {
    type: types.ADD_TASK,
    task: task
  }
}

export const delTask = (id) => {
  return {
    type: types.DEL_TASK,
    id: id
  }
}

export const updateName = (name) => {
  return {
    type: types.UPDATE_NAME,
    name: name
  }
}
