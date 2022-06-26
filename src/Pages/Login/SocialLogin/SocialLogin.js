import React from 'react';
import Google from '../../../imges/Google/google.png'

import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loadi from '../../RequireAuth/Loadi/Loadi';
const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
        ;
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorEle;

    if (error1) {

        errorEle = <p className='text-danger'>Error: {error?.message}</p>


    }
    if (loading1 || loading) {
        <Loadi></Loadi>
    }
    if (user1 || user) {
        navigate('/home')
    }


    return (
        <div >
            <div className='d-flex'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorEle}
            <div className='d-flex justify-content-center align-items-center flex-column'>
                <button onClick={()=>signInWithGoogle()} className='mb-2 btn btn-dark w-50'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    Google
                </button>
               
                <button onClick={()=>signInWithGithub()} className='mb-2 btn btn-dark w-50'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    Google
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;