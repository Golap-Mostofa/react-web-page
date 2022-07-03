import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDitel.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const ServiceDetail = () => {
    const [user] = useAuthState(auth)
    const { serviceId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `https://infinite-waters-38341.herokuapp.com/product/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const booked = () => {
        // if(user){
        //     toast('booked successfully')
        // }
    }
    return (
        <div className=''>
            <h2 className='text-primary text-center'><span className='text-danger  font-weight-bold'>BOOKED </span>{service.name}</h2>

            <div className='d-flex justify-content-center align-items-center '>
                <div className='review-item'>
                    <div>
                        <img src={service.img} alt="" />
                    </div>
                    <div className='review-detail-container'>
                        <div className="review-detail">


                            <p className='text-primary'>{service.name}</p>
                            <p className='text-danger'><small>pleace chake out this services</small></p>
                        </div>
                        <div className="delete-container">
                            <Link to={'/checkout'}>
                                <button onClick={booked} className='btn btn-primary '>Check Out</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;