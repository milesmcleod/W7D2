import merge from 'lodash/merge';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';

const initialState = [];

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return initialState;
  }
};

export default errorsReducer;
