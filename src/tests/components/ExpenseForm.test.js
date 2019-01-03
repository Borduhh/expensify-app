import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

// Render ExpenseForm with no data
test('Should render ExpenseForm correctly with empty data', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

// Render ExpenseForm with dummy data
test('Should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});

// Render ExpenseForm error with invalid data
test('Should render error for invalid form data', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

// Description input change test
test('Should set decription on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const textValue = 'New Descirption.'

  wrapper.find('input').at(0).simulate('change', {
    target: {
      value: textValue
    }
  });

  expect(wrapper.state('description')).toBe(textValue);
});

// Note textarea change test
test('Should set note on textarea change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const textValue = 'This is a new note sentance.'

  wrapper.find('textarea').at(0).simulate('change', {
    target: {
      value: textValue
    }
  });

  expect(wrapper.state('note')).toBe(textValue);
});

// Amount change with valid input test
test('Should set amount on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const amount = '24.55';

  wrapper.find('input').at(1).simulate('change', {
    target: {
      value: amount
    }
  });

  expect(wrapper.state('amount')).toBe(amount);
});

// Amount change with invalid input test
test('Should not set amount on invalid input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const amount = '24.555456';

  wrapper.find('input').at(1).simulate('change', {
    target: {
      value: amount
    }
  });

  expect(wrapper.state('amount')).toBe('');
});

// onSubmit form submission test with mock spy
test('Should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});

// Date change with onDateChange Test
test('Should set new date with onDateChange', () => {
  const wrapper = shallow(<ExpenseForm />);
  const now = moment();
  
  wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

// Focus change with onFocusChange Test
test('Should set new focus with onFocusChange', () => {
  const wrapper = shallow(<ExpenseForm />);
  const focused = true;
  
  wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
  expect(wrapper.state('calendarFocused')).toEqual(focused);
});
