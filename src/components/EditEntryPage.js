import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { initEditEntry, initRemoveEntry, initAddEntry } from '../actions/entries';

export class EditEntryPage extends React.Component {
  

  onSubmit = (entry) => {
    this.props.initEditEntry(this.props.entry.id, entry);
    this.props.history.push('/');
  };

  onDelete = () => {
    this.props.initRemoveEntry({ id: this.props.entry.id });
    this.props.history.push('/');
  };

  onDuplicate = () => {
    this.props.initAddEntry(this.props.entry);
    this.props.history.push('/'); //if possible, push user to new duped entry
  };

  render() {
    return ( //if possible, somehow make duplicate and remove buttons on same line as add button by puttig them in EntryForm
      <div>
        <div className="subheader">
          <div className="content-container">
            <h1 className="subheader__title">Edit Entry</h1>
          </div>
        </div>
        <div className="content-container">
          <EntryForm
            entry={this.props.entry}
            onSubmit={this.onSubmit}
          /> 
          <button className="button button--duplicate" onClick={this.onDuplicate}>Duplicate</button> 
          <br /> 
          <button className="button button--remove" onClick={this.onDelete}>Remove</button>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.find((entry) => entry.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  initEditEntry: (id, entry) => dispatch(initEditEntry(id, entry)),
  initRemoveEntry: (data) => dispatch(initRemoveEntry(data)),
  initAddEntry: (entry) => dispatch(initAddEntry(entry)) //this duplicates
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEntryPage);
