export default (
  state = {
    text: '',
    sortBy: 'title',
  },
  action
) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.text };
    case 'SORT_BY_TITLE':
      return { ...state, sortBy: 'title' };
    default:
      return state;
  }
};
