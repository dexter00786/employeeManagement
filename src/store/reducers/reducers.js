import {ADD_EMPLOYEE_DATA, MODIFY_FAVOURITE} from '../types';

const initialState = {
  employees: [],
};
export const addemployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_DATA:
      return {...state, employees: [...state.employees, action.payload]};

    default:
      return state;
  }
};

export const modifyFavouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_FAVOURITE:
      return action.payload;
    default:
      return state;
  }
};
