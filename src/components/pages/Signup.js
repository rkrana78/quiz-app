import React from 'react';
import Form from '../Form/Form';
import Illustration from '../Illustration/Illustration';
import classes from '../../styles/Signup.css'
import TextInput from '../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';

const Signup = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup}`}>
                    <TextInput type='text'
                        placeholder='Enter name'
                        icon='person' />

                    <TextInput type='text'
                        placeholder='Enter email'
                        icon='alternate_email' />

                    <TextInput type='password'
                        placeholder='Enter password'
                        icon='lock' />

                    <TextInput type='password'
                        placeholder='Confirm password'
                        icon='lock_clock' />

                    <Checkbox text='I agree to the Terms &amp; Conditions' />

                    <Button><span>Submit Now</span></Button>

                    <div className="info">
                        Already have an account?
                        <a href="login.html">Login</a>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Signup;