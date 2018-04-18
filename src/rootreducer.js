import { UPDATE_STUFF, RESET_STUFF } from './actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  image: 1,
  debt: 0,
  tension: 0,
  killSwitch: 0,
  stage: 0,
  description: '',
  items: [{ num: 1 },{ num: 2 },{ num: 3 },{ num: 4 }]
};

function main(state = initialState, action) {
  switch (action.type) {
    case UPDATE_STUFF:
      console.log('UPDATE_STUFF Action')
      return {
        ...state,
        image: state.image + (action.image || 0),
        debt: state.debt + (action.debt || 0),
        tension: state.tension + (action.tension || 0),
        killSwitch: state.killSwitch + (action.killSwitch || 0),
        stage: state.stage + (action.stage || 0),
        description: action.description
      };
    case RESET_STUFF:
      console.log('RESET_STUFF Action')
      return {...initialState};
    default:
      return state;
  }
}

const rootReducer = combineReducers({ main });

export default rootReducer;
