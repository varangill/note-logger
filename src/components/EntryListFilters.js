import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAlphabet, setStartDate, setEndDate, setTypeFilter } from '../actions/filters';
import { Link } from 'react-router-dom';

export class EntryListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }

  onSortChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'alphabet') {
      this.props.sortByAlphabet();
    }
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onTypeChange = (e) => {
    this.props.setTypeFilter(e.target.value);
  }

  render() {
    return (
      
      <div className="content-container">
        <div className="subheader__actions">
          <center>
          <Link to="/create" className="button">Create Entry</Link>
          </center>
        </div>

        <div className="input-items">
          <div className="input-items__item">
            <input
              type="text"
              placeholder="Search entries..."
              className="input-items__text"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-items__item">
            <select
              className="input-items__select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="alphabet">Alphabet</option>
            </select>
          </div>
          <div className="input-items__item">
            <select 
              className="input-items__select"
              onChange={this.onTypeChange}
            >
              <option value="all">All</option>
              <option value="task">Task</option>
              <option value="goal">Goal</option>
            </select>
          </div>
          <div className="input-items__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setTypeFilter: (type) => dispatch(setTypeFilter(type)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAlphabet: () => dispatch(sortByAlphabet()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryListFilters);
