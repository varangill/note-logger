import React from 'react';
import { shallow } from 'enzyme';
import { EntryList } from '../../components/EntryList';
import entries from '../fixtures/entries';

test('should render EntryList with entries', () => {
  const wrapper = shallow(<EntryList entries={entries} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render EntryList with empty message', () => {
  const wrapper = shallow(<EntryList entries={[]} />);
  expect(wrapper).toMatchSnapshot();
});
