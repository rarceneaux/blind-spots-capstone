import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { GoogleLoginButton } from 'react-social-login-buttons';

import './Auth.scss';

class Auth extends React.Component {
    loginClickEvent = (e) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }

    render() {
      return (
      <div className="Auth my-5">
        <div className="d-flex justify-content-center mt-r test">
        <button className="btn btn-secondary" onClick={this.loginClickEvent}>Sign in with Google</button>
      </div>
      </div>
      );
    }
}

export default Auth;
