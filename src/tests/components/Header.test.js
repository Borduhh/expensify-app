import { shallow } from 'enzyme';
import React from 'react';

import { Header } from '../../components/Header';

let startLogoutSpy, wrapper;

beforeEach(() => {
  startLogoutSpy = jest.fn();
  wrapper = shallow(<Header startLogout={startLogoutSpy} />);
});

test('Should render Header correctly', () => {  
  expect(wrapper).toMatchSnapshot();
});

test('Should call startLogOut on button click', () => {
  wrapper.find('button').simulate('click');

  expect(startLogoutSpy).toHaveBeenCalled();
});