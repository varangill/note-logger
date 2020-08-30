import React from 'react';
import { shallow } from 'enzyme';
import { AddEntryPage } from '../../components/AddEntryPage';
import entries from '../fixtures/entries';

let initAddEntry, history, wrapper;

beforeEach(() => {
  initAddEntry = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddEntryPage initAddEntry={initAddEntry} history={history} />);
});

test('should render AddEntryPage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('EntryForm').prop('onSubmit')(entries[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(initAddEntry).toHaveBeenLastCalledWith(entries[1]);
});
