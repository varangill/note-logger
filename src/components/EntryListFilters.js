import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAlphabet, setStartDate, setEndDate, setTypeFilter } from '../actions/filters';

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
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="alphabet">Alphabet</option>
        </select>
        
        <select //FIX THIS
          onChange={this.onTypeChange}
        >
          <option value="all">All</option>
          <option value="task">Task</option>
          <option value="goal">Goal</option>
        </select>

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
