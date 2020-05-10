import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';

export const Header = ({ history, isAuthenticated, logout }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>
            <Link className="header-home-link" to="/dashboard">
              Blogy
            </Link>
          </h1>
          {isAuthenticated && (
            <button
              className="button button--logout"
              onClick={() => {
                logout();
                history.push('/');
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(startLogout()),
});
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
