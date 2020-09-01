import { addEntry, initAddEntry, startSetEntries, editEntry, removeEntry, setEntries } from '../../actions/entries';
import entryData from '../fixtures/entries';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase.js'
import entries from '../fixtures/entries';


beforeEach((done) => { //generating test data arrays inside Firebase database
  const entriesData = {};
  entries.forEach(({id, description, note, tag, createdAt}) => {
    entriesData[id] = {description, note, tag, createdAt}
  });
  database.ref('entries').set(entriesData).then(() => done());
});

const createMockStore = configureMockStore([thunk]);

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
  const action = addEntry(entryData[2]);
  expect(action).toEqual({
    type: 'ADD_ENTRY',
    entry: entryData[2]
  });
});


test('should add manual entry to database and store', (done) => {
  const store = createMockStore({});
  const entryData2 = {
    description: 'Mouse',
    tag: 'task',
    note: 'This one is better',
    createdAt: 1000
  };
  store.dispatch(initAddEntry(entryData2)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_ENTRY',
      entry: {
        id: expect.any(String),
        ... entryData2
      }
    });
    return database.ref(`entries/${actions[0].entry.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(entryData2);
      done();
    });
});

test('should setup setEntry object', () => {
  const setup = setEntries(entries);
  expect(setup).toEqual({
    type: 'SET_ENTRIES',
    entries
  })
});

test('should add default entry to database+store', () => {
  const store = createMockStore({});
  const defaultEntryData = {
    description: '',
    tag: 'task',
    note: '',
    createdAt: 0
  };
  store.dispatch(initAddEntry()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_ENTRY',
      entry: {
        id: expect.any(String),
        ... defaultEntryData
      }
    });
    return database.ref(`entries/${actions[0].entry.id}`).once('value');
  }).then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultEntryData);
      done();
    });
});

test('should get entries from firebase database', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetEntries()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_ENTRIES',
      entries
    });
    done();
  });
});