import db from '../firebase/firebase';

// ADD_EXPENSE Action
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

// Async start add expense
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;

    return db.ref('expenses').push({ description, note, amount, createdAt })
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          description,
          note,
          amount,
          createdAt
        }));
      });

  };
};

// EDIT_EXPENSE Action
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return(dispatch) => {
    return db.ref(`expenses/${ id }`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  }
};

// REMOVE_EXPENSE Action
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return db.ref(`expenses/${ id }`).remove().then(() => {
      dispatch(removeExpense({id}));
    });
  };
};

// SET_EXPENSES Action
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

// Async set expenses
export const startSetExpenses = () => {
  return (dispatch) => {
    return db.ref('expenses').once('value').then((snapshot) => {
        const expenseData = [];

        snapshot.forEach((expense) => {
          expenseData.push({
            id: expense.key,
            ...expense.val()
          });
        });

        dispatch(setExpenses(expenseData));
      });
  };
};