import uuid from 'uuid';
import database from '../firebase/firebase.js';

export const initAddEntry = (entryData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = '', //these are default values for if nothing is passed in
      note = '',
      tag = "task",
      createdAt = 0
    } = entryData;
    const entryToAdd = {description, note, tag, createdAt}

    return database.ref(`users/${uid}/entries`).push(entryToAdd).then((ref) => { 
      dispatch(addEntry({
        id: ref.key,
        ...entryToAdd
      }));
    });
  };
};

// ADD_ENTRY
export const addEntry = (entry) => ({ 
  type: 'ADD_ENTRY',
  entry
});

// REMOVE_ENTRY
export const removeEntry = ({ id } = {}) => ({
  type: 'REMOVE_ENTRY',
  id
});

export const initRemoveEntry = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/entries/${id}`).remove().then(() => {
      dispatch(removeEntry({id}));
    });
  };
};

// EDIT_ENTRY
export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});

export const initEditEntry = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/entries/${id}`).update(updates).then(() => {
      dispatch(editEntry(id, updates));
    })
  }
};

// SET_ENTRIES
export const setEntries = (entries) => ({
  type: 'SET_ENTRIES',
  entries
})

export const startSetEntries = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/entries`).once('value').then((snapshot) => {
      const entries = [];

      snapshot.forEach((childSnapshot) => {
        entries.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setEntries(entries));
    });
  };
};