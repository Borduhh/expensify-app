import db from '../firebase/firebase';

// ADD_EXPENSE Action
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

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

// REMOVE_EXPENSE Action
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

