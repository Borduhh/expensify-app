import { shallow } from 'enzyme';
import React from 'react';

import LoadingPage from '../../components/LoadingPage';

test('Should render loading page successfully', () => {
  const wrapper = shallow(<LoadingPage />);

  expect(wrapper).toMatchSnapshot();
});