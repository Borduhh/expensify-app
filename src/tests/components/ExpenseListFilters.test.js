import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment'

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, defaultFilters } from '../fixtures/filters';

let setTextFilterSpy, sortByDateSpy, sortByAmountSpy, setStartDateSpy, setEndDateSpy, wrapper;

beforeEach(() => {
  setTextFilterSpy = jest.fn(); 
  sortByDateSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();

  wrapper = shallow(<ExpenseListFilters 
    filters={defaultFilters}
    setTextFilter={setTextFilterSpy}
    sortByDate={sortByDateSpy}
    sortByAmount={sortByAmountSpy}
    setStartDate={setStartDateSpy}
    setEndDate={setEndDateSpy}
  />);
});

// ExpenseListFilters Render with default filters test
test('Should render with default filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// ExpenseListFilters Render with custom filters test
test('Should render with custom filters correctly', () => {
  wrapper.setProps({
    filters
  });

  expect(wrapper).toMatchSnapshot();
});

// setTextFilter change test
test('Should handle setTextFilter change', () => {
  const textValue = 'water';

  wrapper.find('input').simulate('change', {
    target: {
      value: textValue
    }
  });
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(textValue);
});

// sortByDate test
test('Should sort by date', () => {
  wrapper.setProps({ filters });
  const selectValue = 'date';

  wrapper.find('select').simulate('change', {
    target: {
      value: selectValue
    }
  });
  expect(sortByDateSpy).toHaveBeenCalled();
});

// sortByAmount test
test('Should sort by amount', () => {
  const selectValue = 'amount';

  wrapper.find('select').simulate('change', {
    target: {
      value: selectValue
    }
  });

  expect(sortByAmountSpy).toHaveBeenCalled();
});

// onDatesChange Test
test('Should handle date changes', () => {
  const startDate = moment().add(3, 'days');
  const endDate = moment().add(4, 'months');

  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });

  expect(setStartDateSpy).toHaveBeenLastCalledWith(startDate);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(endDate);
});

// onFocusChange Test
test('Should handle onFocusChange input', () => {
  const calendarFocused = 'startDate'

  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);

  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});