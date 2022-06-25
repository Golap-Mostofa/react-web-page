import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service,setService] = useState({})

    useEffect(()=>{
        const url =`http://localhost:5000/product/${serviceId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])

    return (
        <div className=''>
            <h2 className='text-primary'><span className='text-danger font-weight-bold'>BOOKED </span>{service.name}</h2>
            <div>

                <Link to={'/checkout'}>
                    <button className='btn btn-primary '>Check Out</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;