import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
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
    
    const [sendPasswordResetEmail,sending] = useSendPasswordResetEmail( auth );
    if(loading){
        <Loadi></Loadi>
    }

    if (user) {
        navigete(from, { replace: true });
    }
    if ( error) {
        
        errorEle =  <p>Error: {error?.message}</p>
            
      
    }

    const nevigetRegestar = () => {
        navigete('/signUp')
    }
    const resetPassword = async() =>{
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
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-dark text-center'>Pleash Login</h1>
            <Form onSubmit={hendelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
               
                <Button variant="dark w-50 mx-auto d-block" type="submit">
                    Login
                </Button>
            </Form>
            <p>{errorEle}</p>
            <p>New to Genius Car <Link to={'/signUp'} className='text-primary ' onClick={nevigetRegestar}>Pleash SignUp</Link></p>
            <p>Forget Password? <button className='text-primary btn btn-link' onClick={resetPassword}>Reset password</button></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;