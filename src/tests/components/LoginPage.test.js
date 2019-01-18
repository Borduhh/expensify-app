import { shallow } from 'enzyme';
import React from 'react';

import { LoginPage } from '../../components/LoginPage';
import startLogin from '../../actions/auth';

let startLoginSpy, wrapper;

beforeEach(() => {
startLoginSpy = jest.fn();

  wrapper = shallow(<LoginPage 
    startLogin={startLoginSpy}
  />);  
});

test('Should render LoginPage componenet correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogin on button click', () => {
  wrapper.find('button').simulate('click');

  expect(startLoginSpy).toHaveBeenCalled();
});