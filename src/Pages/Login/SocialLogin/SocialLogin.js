import React from 'react';
import Google from '../../../imges/Google/google.png'
import Facebook from '../../../imges/Google/facebook.webp'
const SocialLogin = () => {
    return (
        <div >
            <div className='d-flex'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p>or</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            <div>
                <button className='btn btn-dark w-50'>
                    <img style={{width:'30px'}} src={Google} alt="" />
                    Google
                </button>
                <button className='btn btn-dark w-50'>
                    <img style={{width:'25px'}} src={Facebook} alt="" />
                    Facebook
                </button>
                <button className='btn btn-dark w-50'>
                    <img style={{width:'30px'}} src={Google} alt="" />
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;