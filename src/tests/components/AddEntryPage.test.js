import React from 'react';
import { shallow } from 'enzyme';
import { AddEntryPage } from '../../components/AddEntryPage';
import entries from '../fixtures/entries';

let addEntry, history, wrapper;

beforeEach(() => {
  addEntry = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddEntryPage addEntry={addEntry} history={history} />);
});

test('should render AddEntryPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('EntryForm').prop('onSubmit')(entries[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addEntry).toHaveBeenLastCalledWith(entries[1]);
});
