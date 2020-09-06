import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetEntries } from './actions/entries';
import { login, logout } from './actions/auth';
import getVisibleEntries from './selectors/entries';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';

const store = configureStore();

// store.dispatch(addEntry({ description: 'Water bill', tag: "task", createdAt: 1598048818594 }));
// store.dispatch(addEntry({ description: 'Aa', tag: "goal", createdAt: 1598048818594 }));

const state = store.getState();
const visibleEntries = getVisibleEntries(state.entries, state.filters);
console.log(visibleEntries);

let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => { //function runs whenever a login or logout is made
  if (user) { //if user is logged in
    console.log(user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startSetEntries()).then(() => {
      renderApp();
      if (history.location.pathname === '/') { //pushes from login page to main page
        history.push('/main');
      }
    });

  } else { //when user logs out, pushes to login page
    store.dispatch(logout());
    renderApp(); 
    history.push('/');
  }
});
