import { setText, sortByTitle } from '../../actions/filters';

test('it should return the correct action for setText filter', () => {
  const text = 'abcd';
  expect(setText(text)).toEqual({
    type: 'SET_TEXT',
    text,
  });
});

test('it should return the correct action for sortByTitle', () => {
  expect(sortByTitle()).toEqual({
    type: 'SORT_BY_TITLE',
  });
});
