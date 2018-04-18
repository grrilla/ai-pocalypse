import { UPDATE_STUFF, RESET_STUFF } from './actionTypes';
import { combineReducers } from 'redux';
import STAGES from './api';

const initialState = {
  debt: STAGES[0][0].debt,
  tension: STAGES[0][0].social,
  killSwitch: 0,
  stage: STAGES[0][0].stage,
  items: STAGES[0]
};

function main(state = initialState, action) {
  let returnObj;
  switch (action.type) {
    case UPDATE_STUFF:
      returnObj = {
        ...state,
        debt: Math.min(state.debt + (action.debt || 0), 2),
        tension: state.tension + (action.social || 0),
        killSwitch: state.killSwitch + (action.killSwitch || 0),
        stage: action.nextStage,
        items: STAGES[action.nextStage]
      };
      console.log('UPDATE_STUFF Action', returnObj);
      return returnObj;
    case RESET_STUFF:
      returnObj = { ...initialState };
      console.log('RESET_STUFF Action', returnObj);
      return {...initialState};
    default:
      return state;
  }
}

const rootReducer = combineReducers({ main });

export default rootReducer;
