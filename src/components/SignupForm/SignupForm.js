import React, { useState } from 'react';
import TextInput from '../TextInput/TextInput';
import Checkbox from '../Checkbox/Checkbox';
import Button from '../Button/Button';
import Form from '../Form/Form';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');

    const [error, setError] = useState();
    const [loading,setLoading] =useState()

    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit (e) {
        e.preventDefault();
        //validation

        if(password !== confirmPassword) {
            return setError("Password don't match!!")
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username )
            history.push('/')
        } catch(err) {
            console.log(err);
            setLoading(false);
            setError('Failed to signup')
        }
    }
    return (
        <div>
            <Form style={{ height: '500px' }} onSubmit={handleSubmit}>
                <TextInput type='text'
                    required
                    placeholder='Enter name'
                    icon='person' value={username} onChange={(e) => setUsername(e.target.value)} />

                <TextInput type='text'
                    required
                    placeholder='Enter email'
                    icon='alternate_email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <TextInput type='password'
                    required
                    placeholder='Enter password'
                    icon='lock' value={password} onChange={(e) => setPassword(e.target.value)} />

                <TextInput type='password'
                    required
                    placeholder='Confirm password'
                    icon='lock_clock' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <Checkbox text='I agree to the Terms &amp; Conditions'
                    required
                    value={agree} onChange={(e) => setAgree(e.target.value)} />

                <Button disabled ={loading} type='submit'><span>Submit Now</span></Button>

                {error && <p className='error'>{error}</p>}
                <div className="info">
                    Already have an account?
                    <Link to="/login">Login</Link>
                </div>
            </Form>
        </div>
    );
};

export default SignupForm;