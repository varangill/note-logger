import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EntryListItem from './EntryListItem';
import selectEntries from '../selectors/entries';

export const EntryList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-mobile">Entries</div>
      <div className="show-desktop">Entry</div>
      <div className="show-desktop">Type</div>
    </div>
    <div className="list-main">
      {
        props.entries.length === 0 ? (
          <div className="list-item list-item--msg">
            <span>No Entries</span>
          </div>
        ) : (
            props.entries.map((entry) => {
              return <EntryListItem key={entry.id} {...entry} />; //removed return
            })
          )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    entries: selectEntries(state.entries, state.filters)
  };
};

export default connect(mapStateToProps)(EntryList);
