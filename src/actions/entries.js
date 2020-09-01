import uuid from 'uuid';
import database from '../firebase/firebase.js';

export const initAddEntry = (entryData = {}) => {
  return (dispatch) => {
    const {
      description = '', //these are default values for if nothing is passed in
      note = '',
      tag = "task",
      createdAt = 0
    } = entryData;
    const entryToAdd = {description, note, tag, createdAt}

    return database.ref('entries').push(entryToAdd).then((ref) => {
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

// EDIT_ENTRY
export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});

// SET_ENTRIES
export const setEntries = (entries) => ({
  type: 'SET_ENTRIES',
  entries
})

export const startSetEntries = () => {
  return (dispatch) => {
    return database.ref('entries').once('value').then((snapshot) => {
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