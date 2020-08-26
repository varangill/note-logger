import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_ENTRY
const addEntry = (
  {
    description = '',
    note = '',
    alphabet = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_ENTRY',
  entry: {
    id: uuid(),
    description,
    note,
    alphabet,
    createdAt
  }
});

// REMOVE_ENTRY
const removeEntry = ({ id } = {}) => ({
  type: 'REMOVE_ENTRY',
  id
});

// EDIT_ENTRY
const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_ALPHABET
const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});

// Entries Reducer

const entriesReducerDefaultState = [];

const entriesReducer = (state = entriesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_ENTRY':
      return [
        ...state,
        action.entry
      ];
    case 'REMOVE_ENTRY':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_ENTRY':
      return state.map((entry) => {
        if (entry.id === action.id) {
          return {
            ...entry,
            ...action.updates
          };
        } else {
          return entry;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_ALPHABET':
      return {
        ...state,
        sortBy: 'alphabet'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible entries
const getVisibleEntries = (entries, { text, sortBy, startDate, endDate }) => {
  return entries.filter((entry) => {
    const startDateMatch = typeof startDate !== 'number' || entry.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || entry.createdAt <= endDate;
    const textMatch = entry.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'alphabet') {
      return a.alphabet < b.alphabet ? 1 : -1;
    }
  });
};

// Store creation

const store = createStore(
  combineReducers({
    entries: entriesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleEntries = getVisibleEntries(state.entries, state.filters);
  console.log(visibleEntries);
});

const entryOne = store.dispatch(addEntry({ description: 'Rent', alphabet: 100, createdAt: -21000 }));
const entryTwo = store.dispatch(addEntry({ description: 'Coffee', alphabet: 300, createdAt: -1000 }));

// store.dispatch(removeEntry({ id: entryOne.entry.id }));
// store.dispatch(editEntry(entryTwo.entry.id, { alphabet: 500 }));

// store.dispatch(setTextFilter('ffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAlphabet());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startDate 125
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // endDate 1250

const demoState = {
  entries: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    alphabet: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'alphabet', // date or alphabet
    startDate: undefined,
    endDate: undefined
  }
};
