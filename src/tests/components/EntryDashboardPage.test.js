import React from 'react';
import { shallow } from 'enzyme';
import EntryDashboardPage from '../../components/EntryDashboardPage';

test('should render EntryDashboardPage correctly', () => {
  const wrapper = shallow(<EntryDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
