import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDitel.css'
const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})

    useEffect(() => {
        const url = `https://infinite-waters-38341.herokuapp.com/product/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const booked = () => {
        toast('booked successfully')
    }
    return (
        <div className=''>
            {/* <h2 className='text-primary text-center'><span className='text-danger  font-weight-bold'>BOOKED </span>{service.name}</h2>
            <div >
                <div class="flex justyfy ">
                    <img src={service.img} class="w-15 h-15" alt="..." />
                    <div class="">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">title and make up the bulk of the card's content.</p>
                        <Link to={'/checkout'}>
                            <button onClick={booked} className='btn btn-primary '>Check Out</button>
                        </Link>
                    </div>
                </div>


            </div>
            <ToastContainer></ToastContainer> */}

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