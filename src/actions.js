import * as types from './actionTypes';

export function updateStuff(updateObj) {
  return { type: types.UPDATE_STUFF, ...updateObj };
}

export function resetStuff() {
  return { type: types.RESET_STUFF }
}
