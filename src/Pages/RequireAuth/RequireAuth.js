import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loadi from './Loadi/Loadi';

<<<<<<< HEAD
const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);
  let location = useLocation();
  if (user) {

    <Loadi></Loadi>
  }
  if (!user) {

    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children   
=======
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
>>>>>>> 3c7d764ad2470c788beffc4f92e89e823134fc7a
};

export default RequireAuth;