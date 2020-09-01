import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import { editEntry, initRemoveEntry } from '../actions/entries';

export class EditEntryPage extends React.Component {
  

  onSubmit = (entry) => {
    this.props.editEntry(this.props.entry.id, entry);
    this.props.history.push('/');
  };

  onDelete = () => {
    this.props.initRemoveEntry({ id: this.props.entry.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <EntryForm
          entry={this.props.entry}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onDelete}>Remove</button>
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
  editEntry: (id, entry) => dispatch(editEntry(id, entry)),
  initRemoveEntry: (data) => dispatch(initRemoveEntry(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditEntryPage);
