export default (state = [], action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return action.posts;
    case 'ADD_POST':
      return [...state, action.post];
    case 'EDIT_POST':
      return state.map((p) => {
        if (p.id === action.id) {
          return {
            ...p,
            ...action.updates,
          };
        }
        return p;
      });

    case 'REMOVE_POST':
      return state.filter((post) => post.id !== action.id);
    default:
      return state;
  }
};
