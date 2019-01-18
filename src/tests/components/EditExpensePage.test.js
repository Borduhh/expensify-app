import React from 'react';
import { shallow } from 'enzyme';

import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpenseSpy, startRemoveExpenseSpy, historySpy, wrapper;

beforeEach(()=> {
  editExpenseSpy = jest.fn();
  startRemoveExpenseSpy = jest.fn();
  historySpy = {
    push: jest.fn()
  };

  wrapper = shallow(<EditExpensePage 
    editExpense={editExpenseSpy}
    startRemoveExpense={startRemoveExpenseSpy}
    history={historySpy}
    expense={expenses[1]}
  />);
});

// EditExpensePage Render Test
test('Should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense onSubmit',() => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('Should handle startRemoveExpense onClick',() => {
  wrapper.find('button').simulate('click');

  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
