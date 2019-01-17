import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

// Default state test
test('Should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});

  expect(state).toEqual([]);
});

// REMOVE_EXPENSE with ID test
test('Should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '2'
  };
  const state = expensesReducer(expenses, action);
  
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

// REMOVE_EXPENSE with incorrect ID test
test('Should not remove expenses with ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  
  expect(state).toEqual([ expenses[0], expenses[1], expenses[2] ]);
});

// ADD_EXPENSE test
test('Should add expense', () => {
  const expense = {
    id: '4',
    description: 'Mtn Dew',
    note: 'This is Mtn Dew.',
    amount: 225,
    createdAt: 4506
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

// EDIT_EXPENSE with ID test
test('Should edit expense with ID', () => {
  const amount = 14000;

  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  
  expect(state[0].amount).toBe(amount);
});

// EDIT_EXPENSE with incorrect ID test
test('Should not edit expense with incorrect ID', () => {
  const amount = 14000;

  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };

  const state = expensesReducer(expenses, action);
  
  expect(state).toEqual(expenses);
});

// SET_EXPENSES with new expense
test('Should set expenses', () => {

  const action = { 
    type: 'SET_EXPENSES',
    expenses: [ expenses[1] ]
  };

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
});