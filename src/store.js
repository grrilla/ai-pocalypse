import { createStore } from 'redux';
import rootReducer from './rootreducer';

export default function configureStore() {
  return createStore(
    rootReducer,
  );
}
