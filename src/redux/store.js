import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadStateFromSessionStorage } from './sessionStorage';
import { saveStateToSessionStorage } from './sessionStorage';

import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadStateFromSessionStorage();
const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => {
  saveStateToSessionStorage(store.getState());
});

export default store;
