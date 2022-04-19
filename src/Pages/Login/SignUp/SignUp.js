import React, { useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const SignUp = () => {
    const [agree,setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navivate = useNavigate()

    const nevigetSignUp = () => {
        navivate('/login')
    }
    
    const hendelSignUp =async event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // const agree = event.target.terms.checked
       
        await    createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName:name});
          toast('Updated profile');
          navivate('/home')
        



    }
    return (
        <div className='signUp-form mt-5'>
            <h1 className='text-center text-primary mb-3'>Create account</h1>

            <form onSubmit={hendelSignUp} className='from-container'>
                <h3 className='text-center text-dark'>SignUp</h3>
                <input type="text" name="name" id="" placeholder='Your name' />
                <input type="email" name="email" id="" required placeholder='your email' />
                <input type="password" name="password" id="" required placeholder='password' />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">accept terms of condition</label>
               

                      <input
                      disabled={!agree}
                      id='submit'
                       type="submit"
                        value="SignUp" />
                <>
                    <p className='text-center'>New to Genius Car <Link to={'/login'} className='text-primary text-decoration-none' onClick={nevigetSignUp}>Pleash SignUp</Link></p>
                </>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </form>
               
            
        </div>
    );
};

export default SignUp;