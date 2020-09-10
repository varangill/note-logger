import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryListItem = ({ id, description, tag, createdAt }) => (
  <Link className="list-entry" to={`/edit/${id}`}>
    <div>
      <h3 className="list-entry__desc">{description}</h3>
      <span className="list-item__date">{moment(createdAt).format('MMM Do, YYYY')}</span>
    </div>
    <h4 className="list-item__tag">{tag}</h4>
  </Link>
);

export default EntryListItem;

// ATTEMPTS AT PIN FUNCTION
// export default class EntryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       description: props.entry ? props.entry.description : '',
//       note: props.entry ? props.entry.note : '',
//       alphabet: props.entry ? (props.entry.alphabet / 100).toString() : '',
//       tag: props.entry ? props.entry.tag : 'task',
//       createdAt: props.entry ? moment(props.entry.createdAt) : moment()
//     };
//   }
//   pinFunc = () => {
//     console.log("pinned!");
//   };
//   render () {
//     return (
//       <div>
//         <Link to={`/edit/${this.state.id}`}>
//           <h3>{this.state.description}</h3>
//         </Link>
//         <p>{this.state.alphabet} - {this.state.createdAt} - {this.state.tag}</p>
//       </div>
//     )
//   }
// }
