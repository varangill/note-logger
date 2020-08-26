import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addEntry } from './actions/entries';
import { setTextFilter } from './actions/filters';
import getVisibleEntries from './selectors/entries';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();
//ALPHABET MEANS ALPHABETICAL NOW
store.dispatch(addEntry({ description: 'Water bill', tag: "task", createdAt: 1598048818594 }));
store.dispatch(addEntry({ description: 'Gas bill', tag: "goal", createdAt: 1598048818594 }));
store.dispatch(addEntry({ description: 'Rent', tag: "goal", createdAt: 1598048818594 }));
store.dispatch(addEntry({ description: 'Ab', tag: "goal", createdAt: 1598048818594 }));
store.dispatch(addEntry({ description: 'Aa', tag: "goal", createdAt: 1598048818594 }));

const state = store.getState();
const visibleEntries = getVisibleEntries(state.entries, state.filters);
console.log(visibleEntries);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
