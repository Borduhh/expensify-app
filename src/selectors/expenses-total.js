export const getExpensesTotal = (expenses) => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};
