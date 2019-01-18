import authReducer from '../../reducers/auth';

test('Should login and save UID', () => {
  const action = {
    type: 'LOGIN',
    uid: '123456789'
  };

  const state = authReducer(undefined, action);

  expect(state).toEqual({uid:action.uid});
});

test('Should logout and remove UID', () => {
  const uid= '123456789'
  const action = {
    type: 'LOGOUT',
  };

  const state = authReducer({uid}, action);

  expect(state).toEqual({ });
});