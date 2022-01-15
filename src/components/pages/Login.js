import React from 'react';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Illustration from '../Illustration/Illustration';
import TextInput from '../TextInput/TextInput';
import classes from "../../styles/Login.css";

const Login = () => {
    return (
        <>
        <h1>Login to your account</h1>
  
        <div className="column">
          <Illustration />
          <Form className={`${classes.login}`}>
            <TextInput
              type="text"
              placeholder="Enter email"
              icon="alternate_email"
            />
  
            <TextInput type="password" placeholder="Enter password" icon="lock" />
  
            <Button><span>Submit Now</span></Button>
  
            <div className="info">
              Don't have an account? <a href="signup.html">Signup</a> instead.
            </div>
          </Form>
        </div>
      </>
    );
};

export default Login;