import React from 'react';
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {

  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortByChange = (e) => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'amount') {
      this.props.sortByAmount();
    }
  }

  render() {
    return (
      <div className='input-group content-container'>
        <div className='input-group__item input-group__item--text-filter'>
          <input
            type='text'
            className='text-input'
            placeholder='Search Expenses...'
            value={
              this.props.filters.text
            }
            onChange={this.onTextChange}
          />
        </div>
        <div className='input-group__item input-group__item--sort-filter'>
          <select
            className='select'
            value={
              this.props.filters.sortBy
            }
            onChange={this.onSortByChange}
          >
            <option value='date'> Date </option>
            <option value='amount' > Amount </option>
          </select>
        </div>
        <div className='input-group__item input-group__item--date-filter'>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId='filterDatesStartDate'
            endDate={this.props.filters.endDate}
            endDateId='filterDatesEndDate'
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
          />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);