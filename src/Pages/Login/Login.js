
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loadi from '../RequireAuth/Loadi/Loadi';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    let errorEle;
    const navigete = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (loading) {
        <Loadi></Loadi>
    }

    if (user) {
        navigete(from, { replace: true });
    }
    if (error) {

        errorEle = <p className=''>Error: {error?.message}</p>


    }

    const nevigetRegestar = () => {
        navigete('/signUp')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email)
        toast('sent email')
    }

    const hendelSubmit = e => {
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)

    }


    return (
        <div className='signUp-form mt-5'>
            <h1 className='text-center text-primary mb-3'>Login</h1>
            <form onSubmit={hendelSubmit} className='from-container'>
                <input ref={emailRef} type="email" name="email" id="" required placeholder='your email' />
                <input ref={passwordRef} type="password" name="password" id="" required placeholder='password' />
                <input
                    id='submit'
                    type="submit"
                    value="SignUp" />
                <p>{errorEle}</p>
                <p>New to Genius Car <Link to={'/signUp'} className='text-primary ' onClick={nevigetRegestar}>Pleash SignUp</Link></p>
                <p>Forget Password? <button className='text-primary btn btn-link' onClick={resetPassword}>Reset password</button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </form>


        </div>
    );
};

export default Login;




