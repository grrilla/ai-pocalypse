import { FETCH_STUFF, RECEIVE_STUFF } from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  stuff: []
};

function reducer(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
