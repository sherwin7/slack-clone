import React from 'react';

import { Button } from '@material-ui/core';

import { auth, provider } from '../../config/firebase';
import { useStateValue } from '../../contextApi/StateProvider';
import { actionTypes } from '../../contextApi/reducer';

import './Login.css';

const Login = () => {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://www.smarsh.com/media/Slack.png" alt="" />
        <h1>Sign in to Sherwin Workplace</h1>
        <p>sherwin.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
};

export default Login;
