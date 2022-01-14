import React from 'react';
import SignupImage from '../../assets/images/signup.svg'
import './Illustration.css'

const Illustration = () => {
    return (
        <div className='illustration'>
            <img src={SignupImage} alt="Signup" />
        </div>
    );
};

export default Illustration;