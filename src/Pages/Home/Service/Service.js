import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const navigete = useNavigate()
    const { _id, name, img, description, price } = service;
    const hendeloParams = id => {
        navigete(`service/${id}`)
    }
    return (
        <div className='service text-center'>
            <img className='w-100' src={img} alt="" />
            <h2 className='product-title'>{name.slice(0, 12)}</h2>
            <p className='price'>Price :{price}</p>
            <p className='text-black'><small>{description.slice(0, 120)}</small></p>
            <button onClick={() => hendeloParams(_id)} className=' btn btn-primary'>{name}</button>
        </div>
    );
};

export default Service;