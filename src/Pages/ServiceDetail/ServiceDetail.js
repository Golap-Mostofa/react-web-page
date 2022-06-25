<<<<<<< HEAD
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
=======
import React, { useEffect, useState } from 'react';
>>>>>>> 3c7d764ad2470c788beffc4f92e89e823134fc7a
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service,setService] = useState({})
<<<<<<< HEAD

    useEffect(()=>{
        const url =`http://localhost:5000/product/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div className=''>
            <h2 className='text-primary'><span className='text-danger font-weight-bold'>BOOKED </span>{service.name}</h2>
=======
    
    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))

    },[])
    
    return (
        <div className='text-center'>
            <h2>wellcome detaile{service.name}</h2>
>>>>>>> 3c7d764ad2470c788beffc4f92e89e823134fc7a
            <div>

                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>proceed check</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;