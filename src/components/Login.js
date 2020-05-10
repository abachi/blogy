import React from 'react';
import { connect } from 'react-redux';
import { googleAuthProvider, githubAuthProvider } from '../firebase';
import { startLogin } from '../actions/auth';

export const Login = ({ loginWith }) => {
  return (
    <div className="login-page">
      <div className="login-page__content">
        <h1 className="login-page__header">Blogy</h1>
        <p className="login-page__tag">Write and share your thoughts</p>
        <div className="login-page__form">
          <button
            className="login-button login-button--google"
            onClick={() => loginWith(googleAuthProvider)}
          >
            Login with Google
          </button>
          <button
            className="login-button login-button--github"
            onClick={() => loginWith(githubAuthProvider)}
          >
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginWith: (provider) => dispatch(startLogin(provider)),
});

export default connect(null, mapDispatchToProps)(Login);
