import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      <p>This is private info. Please don't share!</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

/* ----- Our Demo Try ----- */

const requireAuthenication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenicted ? (
        <WrappedComponent {...props} />
      ) : (
          <p>You need to be authenicated to see this component.</p>
        )}
    </div>
  );
};

const AuthInfo = requireAuthenication(Info);

ReactDOM.render(<AuthInfo isAuthenicted={true} info='This is the info' />, document.getElementById('app'));