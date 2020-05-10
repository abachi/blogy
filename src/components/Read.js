import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';

export const Read = ({ post }) => {
  return !post ? (
    <div>
      <p>There's no post with this id</p>
    </div>
  ) : (
    <div>
      <Header />
      <div className="container page">
        <h1 className="page__title">{post.title}</h1>
        <p className="page-post__body">{post.body}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => {
  const matches = state.posts.filter((post) => post.id === match.params.id);
  const post = matches[0] ? matches[0] : undefined;
  return { post };
};

export default connect(mapStateToProps)(Read);
