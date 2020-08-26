import React from 'react';
import EntryList from './EntryList';
import EntryListFilters from './EntryListFilters';

const EntryDashboardPage = () => (
  <div>
    <EntryListFilters />
    <EntryList />
  </div>
);

export default EntryDashboardPage;
