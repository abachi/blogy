import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';
import { login, logout } from './actions/auth';
import { startSetPosts } from './actions/posts';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import Loading from './components/Loading';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();
const history = createBrowserHistory();

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <AppRouter value={{ history }} />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
    hasRendered = true;
  }
};

ReactDOM.render(<Loading />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user));
    store.dispatch(startSetPosts()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
