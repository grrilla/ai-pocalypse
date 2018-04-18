import { UPDATE_STUFF, RESET_STUFF } from './actionTypes';
import { combineReducers } from 'redux';
import STAGES from './api';

const initialState = {
  debt: STAGES[0][0].debt,
  tension: STAGES[0][0].social,
  killSwitch: 0,
  stage: STAGES[0][0].stage,
  items: STAGES[0],
  gameOverScreen: null
};

function main(state = initialState, action) {
  let returnObj;
  switch (action.type) {
    case UPDATE_STUFF:
      let gameOverScreen = null;

      if (action.tensionCheck && state.tension >= 4) {
        // Game over if you have much tension
        gameOverScreen = 'failure1';
      } else if (action.nextStage === 'end1' && state.debt >= 2) {
        // if you have 2 debt, go to fail1; else, go to success1.
        if (state.debt >= 2) {
          gameOverScreen = 'failure1';
        } else {
          gameOverScreen = 'success1';
        }
      } else if (action.nextStage === 'end2a') {
        // if you have 2 debt BEFORE applying this debt, go to fail2; else go to stage 22.
        if (state.debt >= 2) {
          gameOverScreen = 'failure2';
        } else {
          action.nextStage = 22;
        }
      } else if (action.nextStage === 'end2b') {
        // if you have 2 debt, go to stage 16; else, go to success2.
        if (state.debt >= 2) {
          action.nextStage = 16;
        } else {
          gameOverScreen = 'success2';
        }
      } else if (action.nextStage === 'end3') {
        // if killSwitch is at 1 BEFORE applying this killSwitch, go to success3; else, go to failure3.')
        if (state.killSwitch >= 1) {
          gameOverScreen = 'success3';
        } else {
          gameOverScreen = 'failure3';
        }
      } else if (action.nextStage === 'failure3') {
        gameOverScreen = 'failure3';
      }

      returnObj = {
        ...state,
        debt: Math.min(state.debt + (action.debt || 0), 2),
        tension: state.tension + (action.social || 0),
        killSwitch: state.killSwitch + (action.killSwitch || 0),
        stage: action.nextStage,
        items: STAGES[action.nextStage] || [],
        gameOverScreen
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
