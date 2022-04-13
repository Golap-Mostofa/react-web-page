import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigete = useNavigate()
    const emailRef = useRef('')
    const passwordRef = useRef('')
   
    const nevigetRegestar = ()=>{
        navigete('/signUp')
    }

    const hendelSubmit = e =>{
        e.preventDefault()
        // const email = emailRef.current.value
        // const password = passwordRef.current.value 
        // console.log(email,password);


    }


    return (
        <div className='container w-50 mx-auto mt-5'>
            <h1 className='text-dark text-center'>Pleash Login</h1>
            <Form onSubmit={hendelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car <Link to={'/signUp'} className='text-danger text-decoration-none' onClick={nevigetRegestar}>Pleash SignUp</Link></p>
        </div>
    );
};

export default Login;