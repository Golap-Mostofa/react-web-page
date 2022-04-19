import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loadi from './Loadi/Loadi';

const RequireAuth = ({children}) => {
    const [user,Loading] = useAuthState(auth);
    console.log(user);
    let location = useLocation();
    if(Loading){
     <Loadi></Loadi>
    }
    if (!user) {
      
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    return children
};

export default RequireAuth;