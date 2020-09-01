import entriesReducer from '../../reducers/entries';
import entries from '../fixtures/entries';

test('should set default state', () => {
  const state = entriesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove entry by id', () => {
  const action = {
    type: 'REMOVE_ENTRY',
    id: entries[1].id
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual([entries[0], entries[2]]);
});

test('should not remove entries if id not found', () => {
  const action = {
    type: 'REMOVE_ENTRY',
    id: '-1'
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual(entries);
});

test('should add an entry', () => {
  const entry = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
  };
  const action = {
    type: 'ADD_ENTRY',
    entry
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual([...entries, entry]);
});

test('should edit an entry', () => {
  const description = 122000;
  const action = {
    type: 'EDIT_ENTRY',
    id: entries[1].id,
    updates: {
      description
    }
  };
  const state = entriesReducer(entries, action);
  expect(state[1].description).toBe(description);
});

test('should not edit an entry if id not found', () => {
  const description = 122000;
  const action = {
    type: 'EDIT_ENTRY',
    id: '-1',
    updates: {
      description
    }
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual(entries);
});

test('should set entries', () => {
  const action = {
    type: 'SET_ENTRIES',
    entries: [entries[2]]
  };
  const state = entriesReducer(entries, action);
  expect(state).toEqual([entries[2]]);
});
