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
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          className="input-items__text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <select 
          value={this.state.tag}
          onChange={this.onTagChange}
          className="input-items__select"
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
          className="input-items__textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Entry</button>
        </div>
      </form>
    )
  }
}
