import { getVisibleExpenses } from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

// sortByText Test
test('Should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[1] ]);
});

// startDate Filter Test
test('Should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(1000),
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[0] ]);
});

// endDate filter Test
test('Should filter by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0)
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([ expenses[0], expenses[1] ]);
});

// sortBy Date Test
test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[0], expenses[1] ]);
});

// sortBy Amount Test
test('Should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const result = getVisibleExpenses(expenses, filters);

  expect(result).toEqual([ expenses[1], expenses[2], expenses[0] ]);
});
