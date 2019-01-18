import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  handleOnSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  handleOnClick = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h2>Edit Expense</h2>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.handleOnSubmit} />
        <button onClick={this.handleOnClick}>Remove Expense</button>
      </div>
    );
  };
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, expense) => { dispatch(startEditExpense(id, expense)) },
    startRemoveExpense: (expenseId) => { dispatch(startRemoveExpense(expenseId)) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);