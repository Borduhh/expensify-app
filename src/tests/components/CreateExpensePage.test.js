import React from 'react';
import { shallow } from 'enzyme';

import { CreateExpensePage } from '../../components/CreateExpensePage';
import expenses from '../fixtures/expenses';

let addExpenseSpy, historySpy, wrapper;

beforeEach(() => {
  addExpenseSpy = jest.fn();
  historySpy = { push: jest.fn() }

  wrapper = shallow(<CreateExpensePage addExpense={addExpenseSpy} history={historySpy} />);
});

// CreateExpensePage render test
test('Should render createExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

// addExpense form submit test
test('Should handle addExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[1]);
});