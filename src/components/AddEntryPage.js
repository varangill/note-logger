import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { addEntry } from '../actions/entries';

export class AddEntryPage extends React.Component {
  onSubmit = (entry) => {
    this.props.addEntry(entry);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Entry</h1>
        <EntryForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEntry: (entry) => dispatch(addEntry(entry))
});

export default connect(undefined, mapDispatchToProps)(AddEntryPage);
