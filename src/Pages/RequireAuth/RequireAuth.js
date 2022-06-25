import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loadi from './Loadi/Loadi';

const RequireAuth = ({children}) => {
  const navigate = useNavigate()
    const [user,Loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
      auth
    );
    let location = useLocation();
    if(Loading){
     <Loadi></Loadi>
    }
    if (!user) {
      
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
      // console.log(user);
    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
      <div>
        <p className='text-primary'>Pleash varyfiy your yemail</p>
        <button
        onClick={async () => {
          await sendEmailVerification();
          toast('Sent email');
        }}
      >
        Verify email
      </button>
      <ToastContainer></ToastContainer>
      </div>
      
    }

    return children
};

export default RequireAuth;