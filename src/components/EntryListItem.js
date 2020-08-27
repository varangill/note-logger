import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryListItem = ({ id, description, tag, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {moment(createdAt).format('MMM Do, YYYY')}
      - 
      {tag}
    </p>
  </div>
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
