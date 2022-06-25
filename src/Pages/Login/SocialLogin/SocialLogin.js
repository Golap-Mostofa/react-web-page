import React from 'react';
import Google from '../../../imges/Google/google.png'

import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
        ;
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let errorEle;

    if (error1) {

        errorEle = <p>Error: {error?.message}</p>


    }
    if (loading1 || loading) {
        errorEle = <p>Loading...</p>;
    }
    if (user1) {
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
<<<<<<< HEAD
            <div className='d-block mx-auto border'>
                <button onClick={()=>signInWithGoogle()} className='btn btn-dark w-100 mb-2'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    Google
                </button>
                {/* <button className='btn btn-dark w-100 mb-2'>
                    <img style={{ width: '25px' }} src={Facebook} alt="" />
                    Facebook
                </button>
                <button onClick={()=>signInWithGithub()} className='btn btn-dark w-100 mb-2'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    Google
                </button> */}
=======
            <div className='d-flex justify-content-center'>
                <div className='  '>
                    <button onClick={() => signInWithGoogle()} className='btn btn-dark w-100 mb-2 d-block ml-50'>
                        <img style={{ width: '30px' }} src={Google} alt="" />
                        Google
                    </button>
                    <button className='btn btn-dark  w-100 mb-2 d-block'>
                        <img style={{ width: '20px' }} src={Google} alt="" />
                        Facebook
                    </button>
                    <button onClick={() => signInWithGithub()} className='btn btn-dark w-100 mb-2 d-block'>
                        <img style={{ width: '30px' }} src={Google} alt="" />
                        Google
                    </button>
                </div>
>>>>>>> 3c7d764ad2470c788beffc4f92e89e823134fc7a
            </div>

        </div>
    );
};

export default SocialLogin;