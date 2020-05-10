import React from 'react';
import { Link } from 'react-router-dom';
import PostFilters from './PostFilters';
import PostList from './PostList';

export const Dashboard = () => {
  return (
    <div className="container dashboard-page">
      <div className="dashboard-page__header">
        <PostFilters />
        <div className="add-post__action">
          <Link className="button button--primary" to={'/add'}>
            Add Post
          </Link>
        </div>
      </div>
      <PostList />
    </div>
  );
};

export default Dashboard;
