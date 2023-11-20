import {ADD_EMPLOYEE_DATA, MODIFY_FAVOURITE} from '../types';

const initialState = {
  employees: [],
};
export const addemployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_DATA:
      return {...state, employees: [...state.employees, action.payload]};

    case MODIFY_FAVOURITE: {
      const {firstName, lastName} = action.payload;
      const {isFavourite} = action.payload;
      const newArr = [...state.employees];
      const index = newArr.findIndex(employee => {
        return (
          employee.firstName === firstName && employee.lastName === lastName
        );
      });
      newArr[index].isFavourite = isFavourite;
      return {
        ...state,
        employees: newArr,
      };
    }

    default:
      return state;
  }
};

