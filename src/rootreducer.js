import { FETCH_STUFF, RECEIVE_STUFF } from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  image: 1,
  debt: 0,
  tension: 0,
  killSwitch: 0,
  stage: 0,
  description: '',
  items: [1,2,3,4]
};

function main(state = initialState, action) {
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

const rootReducer = combineReducers({ main });

export default rootReducer;
