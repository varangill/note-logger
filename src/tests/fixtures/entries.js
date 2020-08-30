import moment from 'moment'

export default [{
  id: '1',
  description: 'Gum',
  note: '',
  tag: 'task',
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  tag: 'task',
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'Credit Card',
  note: '',
  tag: 'task',
  createdAt: moment(0).add(4, 'days').valueOf()
}];
