import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

export const PublicRoute = ({ auth: { isAuthenticated }, component: Component, ...rest }) => (
  <Route {...rest} component={(props) => (
    !isAuthed ? (
      <div>
        <Component {...props} /> 
      </div>
    ) : (
      <Redirect to='/dashboard' />
    )
  )} />
);

const mapStateToProps = (state) => ({
  isAuthed: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);