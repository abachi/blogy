import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startEditPost, startRemovePost } from '../actions/posts';
import ConfirmationModal from './ConfirmationModal';
import PostForm from './PostForm';

export const EditPost = ({ history, match, removePost, editPost, post }) => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const onSavePost = (post) => {
    editPost(match.params.id, post).then(() => history.push('/dashboard'));
  };
  const onRemovePost = () => {
    removePost(post.id).then(() => history.push('/dashboard'));
  };
  const openRemoveModal = () => {
    // this.setState(() => ({ isRemoveModalOpen: true }));
    setIsRemoveModalOpen(true);
  };
  const closeRemoveModal = () => {
    // this.setState(() => ({ isRemoveModalOpen: false }));
    setIsRemoveModalOpen(false);
  };
  return post ? (
    <div className="page">
      <div className="container">
        <div className="readable">
          <Link className="readable__link" to={`/read/${post.id}`}>
            <span>Public link:</span> "{post.title}" via this link.
          </Link>
        </div>
        <PostForm onSavePost={onSavePost} post={post} />
        <div>
          <button className="button button--danger" onClick={openRemoveModal}>
            Remove Post
          </button>
        </div>
        <ConfirmationModal
          isOpen={isRemoveModalOpen}
          onRequestClose={closeRemoveModal}
          onRemove={onRemovePost}
        />
      </div>
    </div>
  ) : (
    <p>There's no post such this ID: {match.params.id}</p>
  );
};

const mapDispatchToProps = (dispatch) => ({
  editPost: (id, updates) => dispatch(startEditPost(id, updates)),
  removePost: (id) => dispatch(startRemovePost(id)),
});

const mapStateToProps = (state, { match }) => {
  const matches = state.posts.filter((post) => post.id === match.params.id);
  const post = matches[0] ? matches[0] : undefined;
  return { post };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
