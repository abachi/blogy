import { login, logout } from '../../actions/auth';

test('it should return the correct action when login', () => {
  const user = { uid: 'abc-123-def-456-ghi-789' };
  expect(login(user)).toEqual({
    type: 'LOGIN',
    uid: 'abc-123-def-456-ghi-789',
  });
});

test('it should return the correct action when logout', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT',
  });
});
