// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SET_TAG_FILTER
export const setTypeFilter = (tag = 'all') => ({
  type: 'SET_TYPE_FILTER',
  tag
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_ALPHABET
export const sortByAlphabet = () => ({
  type: 'SORT_BY_ALPHABET'
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
