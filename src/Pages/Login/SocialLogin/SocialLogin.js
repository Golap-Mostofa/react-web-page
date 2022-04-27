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

    if ( error1) {
        
        errorEle =  <p>Error: {error?.message}</p>
            
      
    }
    if ( loading1 || loading) {
        errorEle = <p>Loading...</p>;
    }
    if(user || user1){
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
            <div className='  '>
                <button onClick={()=>signInWithGoogle()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    Google
                </button>
               
                <button onClick={()=>signInWithGithub()} className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={Google} alt="" />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;