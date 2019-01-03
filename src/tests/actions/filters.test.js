import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from '../../actions/filters'
import moment from 'moment';

// setStartDate Test
test('Should generate set start date action object', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

// setEndDate Test
test('Should generate set end date action object', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

// sortByDate Test
test('Should generate sort by date action object', () => {
  const action = sortByDate();
  
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

// sortByAmount Test
test('Should generate sort by amount action object', () => {
  const action = sortByAmount();
  
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

// setTextFilter Tests
test('Should generate set text filter action object with input', () => {
  const action = setTextFilter('Test Search Terms');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Test Search Terms'
  });
});

test('Should generate set text filter action object with defaults', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});