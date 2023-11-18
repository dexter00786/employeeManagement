import {combineReducers} from 'redux';
import {addemployeeReducer, modifyFavouriteReducer} from './reducers';

export const rootReducer = combineReducers({
  addEmployeeReducer: addemployeeReducer,
  modifyFavouriteReducer: modifyFavouriteReducer,
});
