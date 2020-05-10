import React from 'react';
import { Link } from 'react-router-dom';

export const Post = ({ post }) => {
  return (
    <div className="post">
      <Link className="post__edit-link" to={`/edit/${post.id}`}>
        <h1 className="post__title">{post.title}</h1>
      </Link>
      <Link className="post__read-it" to={`/read/${post.id}`} target="_blank">
        Read it
      </Link>
    </div>
  );
};

export default Post;
