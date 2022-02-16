import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import Form from '../Form/Form';
import TextInput from '../TextInput/TextInput';



const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [error, setError] = useState();
    const [loading, setLoading] = useState()

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        //validation

        try {
            setError('');
            setLoading(true);
            await login(email, password)
            history.push('/')
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Failed to login')
        }
    }
    return (
        <div>
            <Form style={{ height: '330px' }} onSubmit={handleSubmit}>
                <TextInput
                    type="text"
                    required
                    placeholder='Enter email'
                    icon='alternate_email' value={email} onChange={(e) => setEmail(e.target.value)}
                />

                <TextInput type="password"
                    required
                    placeholder="Enter password" icon="lock"
                    value={password} onChange={(e) => setPassword(e.target.value)} />

                <Button type='submit' disabled ={loading}><span>Submit Now</span></Button>

                {error && <p className='error'>{error}</p>}

                <div className="info">
                    Don't have an account? <Link to="/signup">Signup</Link> instead.
                </div>
            </Form>
        </div>
    );
};

export default LoginForm;