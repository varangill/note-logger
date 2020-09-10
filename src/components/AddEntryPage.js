import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { initAddEntry } from '../actions/entries';

export class AddEntryPage extends React.Component {
  onSubmit = (entry) => {
    this.props.initAddEntry(entry);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="subheader">
          <div className="content-container">
            <h1 className="subheader__title">Add Entry</h1>
          </div>
        </div>
        <div className="content-container">
          <EntryForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initAddEntry: (entry) => dispatch(initAddEntry(entry))
});

export default connect(undefined, mapDispatchToProps)(AddEntryPage);
