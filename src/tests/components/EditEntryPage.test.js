import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import { EditEntryPage } from '../../components/EditEntryPage';

let editEntry, removeEntry, history, wrapper;

beforeEach(() => {
  editEntry = jest.fn();
  removeEntry = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditEntryPage
      editEntry={editEntry}
      removeEntry={removeEntry}
      history={history}
      entry={entries[2]}
    />
  );
});

test('should render EditEntryPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editEntry', () => {
  wrapper.find('EntryForm').prop('onSubmit')(entries[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editEntry).toHaveBeenLastCalledWith(entries[2].id, entries[2]);
});

test('should handle removeEntry', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeEntry).toHaveBeenLastCalledWith({
    id: entries[2].id
  });
});
