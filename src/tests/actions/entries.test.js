import { addEntry, editEntry, removeEntry } from '../../actions/entries';

test('should setup remove entry action object', () => {
  const action = removeEntry({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_ENTRY',
    id: '123abc'
  });
});

test('should setup edit entry action object', () => {
  const action = editEntry('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_ENTRY',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add entry action object with provided values', () => {
  const entryData = {
    description: 'Rent',
    createdAt: 1000,
    tag: 'task',
    note: 'This was last months rent'
  };
  const action = addEntry(entryData);
  expect(action).toEqual({
    type: 'ADD_ENTRY',
    entry: {
      ...entryData,
      id: expect.any(String)
    }
  });
});

test('should setup add entry action object with default values', () => {
  const action = addEntry();
  expect(action).toEqual({
    type: 'ADD_ENTRY',
    entry: {
      id: expect.any(String),
      description: '',
      note: '',
      createdAt: 0,
      tag: 'task'
    }
  });
});
