import moment from 'moment';
import filtersReducer from '../../reducers/filters';

// Default reducer object values test
test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, {
    type: '@@INIT'
  });

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

// SORT_BY_AMOUNT test
test('Should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  
  expect(state.sortBy).toBe('amount');
});

// SORT_BY_DATE test
test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'});
  
  expect(state.sortBy).toBe('date');
});

// SET_TEXT_FILTER test
test('Should set text filter to input', () => {

  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text:'testing text'});
  
  expect(state.text).toBe('testing text');
});

// SET_START_DATE Test
test('Should set startDate filter to input', () => {
  const startDate = moment();
  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate});
  
  expect(state.startDate).toBe(startDate);
});

// SET_END_DATE Test
test('Should set endDate filter to input', () => {
  const endDate = moment();
  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate});
  
  expect(state.endDate).toBe(endDate);
});