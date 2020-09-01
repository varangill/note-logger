import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import { EditEntryPage } from '../../components/EditEntryPage';

let initEditEntry, initRemoveEntry, history, wrapper;

beforeEach(() => {
  initEditEntry = jest.fn();
  initRemoveEntry = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditEntryPage
      initEditEntry={initEditEntry}
      initRemoveEntry={initRemoveEntry}
      history={history}
      entry={entries[2]}
    />
  );
});

test('should render EditEntryPage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle initEditEntry', () => {
  wrapper.find('EntryForm').prop('onSubmit')(entries[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(initEditEntry).toHaveBeenLastCalledWith(entries[2].id, entries[2]);
});

test('should handle initRemoveEntry', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(initRemoveEntry).toHaveBeenLastCalledWith({
    id: entries[2].id
  });
});
