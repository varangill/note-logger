import React from 'react';
import { shallow } from 'enzyme';
import entries from '../fixtures/entries';
import EntryListItem from '../../components/EntryListItem';

test('should render EntryListItem correctly', () => {
  const wrapper = shallow(<EntryListItem {...entries[0]} />);
  expect(wrapper).toMatchSnapshot();
});
