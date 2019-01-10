import { getExpensesTotal } from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// Test with no expenses
test('should return 0 if no expenses', () => {
  const result = getExpensesTotal([]);
  expect(result).toBe(0);
});

// Test with 1 expense
test('should correctly add up a single expense', () => {
  const result = getExpensesTotal([expenses[0]]);
  expect(result).toBe(expenses[0].amount);
});

// Test with multiple expenses
test('should correctly add up multiple expenses', () => {
  const result = getExpensesTotal([expenses[1],expenses[2]]);
  expect(result).toBe(expenses[1].amount + expenses[2].amount);
});
