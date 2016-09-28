import { combineReducers } from 'redux';
import {
  START,
  CLEAR_RESULTS,
  DISPATCH_SEARCH,
  UPDATE_STATUS
} from '../constants';

const initialState = {
  status: START,
  results: []
};

function data(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        ...state,
        status: action.status
      };
    case CLEAR_RESULTS:
      return {
        ...state,
        results: []
      }
    case DISPATCH_SEARCH:
      return {
        ...state,
        results: [...action.results]
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({ data });

export default rootReducer;
