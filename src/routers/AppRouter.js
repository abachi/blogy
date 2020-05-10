import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import Login from '../components/Login';
import Read from '../components/Read';
import Dashboard from '../components/Dashboard';
import AddPost from '../components/AddPost';
import EditPost from '../components/EditPost';
import NotFound from '../components/NotFound';

const history = createBrowserHistory();

export const AppRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={Login} exact />
        <PublicRoute path="/read/:id" component={Read} exact />
        <PrivateRoute path="/dashboard" component={Dashboard} exact />
        <PrivateRoute path="/add" component={AddPost} exact />
        <PrivateRoute path="/edit/:id" component={EditPost} exact />
        <NotFound />
      </Switch>
    </Router>
  );
};

export default AppRouter;
