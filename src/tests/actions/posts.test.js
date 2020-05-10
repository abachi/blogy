import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addPostAction, startSavePost } from '../../actions/posts';
import database from '../../firebase';
import posts from '../fixtures/posts';

const mockStore = configureStore([thunk]);
const defaultState = {
  auth: { uid: '1' },
  posts: [],
};
test('it should return the correct action for addPost', () => {
  expect(addPostAction(posts[0])).toEqual({
    type: 'ADD_POST',
    post: posts[0],
  });
});

test('it should add post to database', (done) => {
  const store = mockStore(defaultState);
  const uid = defaultState.auth.uid;
  store
    .dispatch(startSavePost(posts[0]))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_POST',
        post: {
          id: expect.any(String),
          ...posts[0],
        },
      });
      return database.ref(`users/${uid}/posts/${posts[0].id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(posts[0]);
      done();
    });
});
