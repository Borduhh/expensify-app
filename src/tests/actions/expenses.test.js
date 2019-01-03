import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

// removeExpense Test
test('Should setup remove expense action object',() => {
  const action = removeExpense({id: '123456'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123456'
  });
});

// editExpense Test
test('Should setup edit expense action object', () => {
  const action = editExpense('123456', {amount: 15466, note: 'This is a test note'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123456',
    updates: {
      amount:15466,
      note: 'This is a test note'
    }
  });
});

// addExpense Tests
test('Should setup add expense action object with input', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This is the rent test note',
    amount: 54100,
    createdAt: 14556770
  };

  const action = addExpense(expenseData);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with defaults', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});