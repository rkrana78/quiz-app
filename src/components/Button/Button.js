import React from 'react';
import './Button.css'

const Button = ({children}) => {
    return (
        <div className='button'>
            <span>{children}</span>
        </div>
    );
};

export default Button;