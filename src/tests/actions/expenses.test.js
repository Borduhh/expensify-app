import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import db from '../../firebase/firebase';

import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

// // Add dummy data to Firebase before each test case
beforeEach((done) => {
  const expensesData = {};

  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt };
  });

  db.ref('expenses').set(expensesData).then(() => done());
});

// removeExpense Test
test('Should setup remove expense action object',() => {
  const action = removeExpense({id: '123456'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123456'
  });
});

test('Should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    
    return db.ref(`expenses/${id}`).once('value');

  }).then((data) => {
    expect(data.val()).toBeFalsy();
    done();
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
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'A test transaction.',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);

    done();
  });
});

test('Should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const defaultExpenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData
      }
    });

    return db.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpenseData);

    done();
  });
});

// setExpenses Tests
test('Should setup set expense action object with data', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  });
});

// setExpensesStart Test
test('Should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});

  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type:'SET_EXPENSES',
      expenses
    });
    done();
  });
});