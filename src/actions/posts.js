import database from '../firebase';

export const addPostAction = (post) => ({
  type: 'ADD_POST',
  post,
});

export const startSavePost = (post) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts`)
      .push(post)
      .then((snapshot) => {
        dispatch(
          addPostAction({
            id: snapshot.key,
            ...post,
          })
        );
      });
  };
};

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates,
});

export const startEditPost = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts/${id}`)
      .update(updates)
      .then(() => dispatch(editPost(id, updates)));
  };
};

export const setPosts = (posts = []) => ({
  type: 'SET_POSTS',
  posts,
});

export const startSetPosts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts`)
      .once('value')
      .then((snapshots) => {
        let posts = [];
        snapshots.forEach((snapshotChild) => {
          posts.push({
            id: snapshotChild.key,
            ...snapshotChild.val(),
          });
        });
        dispatch(setPosts(posts));
      });
  };
};

export const removePost = (id) => ({
  type: 'REMOVE_POST',
  id,
});

export const startRemovePost = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/posts/${id}`)
      .remove()
      .then(() => dispatch(removePost(id)));
  };
};
