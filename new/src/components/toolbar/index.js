import React from 'react';
import { connect } from 'react-redux';
import { onLogout } from '../../actions/auth';

const Toolbar = (props) => {
  const onLogoutInComponent = () => {
      props.onLogoutFromProps();
  };

  return (
      <div>
          { props.isLoggedIn ? <button onClick={onLogoutInComponent}> Logout</button> : 'Please log in' }

          <pre>{ JSON.stringify(props.loggedInUserInfo, null, 2 ) }</pre>
      </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    onLogoutFromProps: () => dispatch(onLogout()),
});

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    loggedInUserInfo: state.auth.loggedInUserInfo,
});

const withConnect = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

export default withConnect;