import React from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { startSavePost } from '../actions/posts';

export const AddPost = ({ history, startSavePost }) => {
  const savePost = (post) => {
    startSavePost(post);
    history.push('/dashboard');
  };
  return (
    <div className="page container">
      <div>
        <h1 className="page-title">Add Post</h1>
      </div>
      <PostForm onSavePost={savePost} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startSavePost: (post) => dispatch(startSavePost(post)),
});

export default connect(null, mapDispatchToProps)(AddPost);
