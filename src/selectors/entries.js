import moment from 'moment';

// Get visible entries

export default (entries, { text, sortBy, startDate, endDate, tag }) => {
  return entries.filter((entry) => {
    const createdAtMoment = moment(entry.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = entry.description.toLowerCase().includes(text.toLowerCase());
    const tagMatch = tag === 'all' ? true : tag === entry.tag;
    
    return startDateMatch && endDateMatch && textMatch && tagMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'alphabet') { //this is alphabet now
      return a.description.localeCompare(b.description);
    }
  });
};
