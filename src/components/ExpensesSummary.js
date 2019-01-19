import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

import { getVisibleExpenses } from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesTotal}) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');

  return (
    <div className='page-header'>
      <div className='page-header__content content-container'>
        <h1 className='page-header__title'>Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <Link className='button button--thin' to='/create'>Add Expense</Link>
      </div>
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