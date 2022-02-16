import React from 'react';

import Illustration from '../Illustration/Illustration';
import LoginForm from '../LoginForm/LoginForm';

const Login = () => {
    return (
        <>
        <h1>Login to your account</h1>
  
        <div className="column">
          <Illustration />
          <LoginForm/>
        </div>
      </>
    );
};

export default Login;