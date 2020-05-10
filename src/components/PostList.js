import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import getVisiblePosts from '../selectors/visible-posts';

export const PostList = ({ posts }) => {
  return (
    <div className="posts-list">
      {posts.length === 0 && (
        <div className="empty-list">
          <p className="empty-list__message">No posts to show</p>
        </div>
      )}
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: getVisiblePosts(state.posts, state.filters),
});

export default connect(mapStateToProps)(PostList);
