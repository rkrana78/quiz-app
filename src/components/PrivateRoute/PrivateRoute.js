import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute = ({component: Component, ...rest}) => {
const {currentUser} = useAuth()
    return (
        <div>
            {
                currentUser ? (
                    <Route {...rest}>{(props) => <Component {...props}/>}</Route>
                ) : (
                    <Redirect to='/login' />
                )
            }
        </div>
    );
};

export default PrivateRoute;