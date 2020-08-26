import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.entry ? props.entry.description : '',
      note: props.entry ? props.entry.note : '',
      tag: props.entry ? props.entry.tag : 'task',
      createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onTagChange = (e) => {
    const tag = e.target.value;
    this.setState(() => ({ tag }));
    console.log("tag")
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide a title.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        tag: this.state.tag,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <select 
            value={this.state.tag}
            onChange={this.onTagChange}
          >
            <option value="task">Task</option>
            <option value="goal">Goal</option>
          </select>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            placeholder="Add a note for your entry (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Entry</button>
        </form>
      </div>
    )
  }
}
