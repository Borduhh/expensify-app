import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render expense summary with one (1) expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense summary with two (2) expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={56785945664} />);
  expect(wrapper).toMatchSnapshot();
});