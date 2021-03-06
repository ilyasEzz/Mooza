import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutAuth } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logoutAuth }) => {
  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developpers</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Developpers</Link>
        <Link to='/posts'>Posts</Link>
        <Link to='/dashboard'>
          <i className='fas fa-user' /> {''}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logoutAuth} href='#!'>
          <i className='fas fa-sign-out-alt' /> {''}
          <span className='hide-sm'>Logout</span>{' '}
        </a>
      </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>Mooza</Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logoutAuth: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutAuth })(Navbar);
