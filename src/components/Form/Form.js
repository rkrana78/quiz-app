import React from 'react';
import  './Form.css'

const Form = ({children, className, ...rest}) => {
    return (
        // <form className={`${className} ${classes.form}`} {...rest} action='#'>
        <form className='className form' {...rest} action='#'>
            {children}
        </form>
    );
};

export default Form;