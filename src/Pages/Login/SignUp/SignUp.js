import React from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../../firebase.init';
const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const navivate = useNavigate()

    const nevigetSignUp = () => {
        navivate('/login')
    }
    if(user){
        navivate('/home')
    }
    const hendelSignUp = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        // console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)



    }
    return (
        <div className='signUp-form mt-5'>
            <h1 className='text-center text-primary mb-3'>Create account</h1>

            <form onSubmit={hendelSignUp} className='from-container'>
                <h3 className='text-center text-dark'>SignUp</h3>
                <input type="text" name="name" id="" placeholder='Your name' /><br />
                <input type="email" name="email" id="" required placeholder='your email' /><br />
                <input type="password" name="password" id="" required placeholder='password' /><br />
                <input id='submit' type="submit" value="SignUp" />
                <>
                    <p className='text-center'>New to Genius Car <Link to={'/login'} className='text-danger text-decoration-none' onClick={nevigetSignUp}>Pleash SignUp</Link></p>
                </>
            </form>


        </div>
    );
};

export default SignUp;