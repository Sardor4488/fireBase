import React, { useContext } from 'react';
import { Route, redirect } from 'react-router-dom';
import { AuthContext } from './auth';

const PrivateRout = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routerProps =>
                !!currentUser ? (
                    <RouteComponent {...routerProps} />
                ) : (
                    <redirect to={"/login"} />
                )

            }
        />
    )
}

export default PrivateRout