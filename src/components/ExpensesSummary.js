import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import { getVisibleExpenses } from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expensesCount: getVisibleExpenses(state.expenses, state.filters).length,
    expensesTotal: getExpensesTotal(getVisibleExpenses(state.expenses, state.filters))
  };
};

export default connect(mapStateToProps)(ExpensesSummary);