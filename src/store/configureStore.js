import { createStore, combineReducers } from 'redux';
import entriesReducer from '../reducers/entries';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      entries: entriesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
