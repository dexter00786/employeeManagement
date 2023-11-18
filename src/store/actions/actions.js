import {ADD_EMPLOYEE_DATA, MODIFY_FAVOURITE} from '../types';

export const addEmployeeAction = data => {
  return dispatch => {
    dispatch({type: ADD_EMPLOYEE_DATA, payload: data});
  };
};

export const modifyFavouriteAction = (data) => {
  return dispatch => {
    dispatch({type: MODIFY_FAVOURITE, payload: data});
  };
};
