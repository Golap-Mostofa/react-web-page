import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const navigete = useNavigate()
    const {id,name,img,description,price} = service;
    const hendeloParams = id =>{
       navigete(`service/${id}`)
    }
    return (
        <div className='service '>
            <img className='w-100' src={img} alt="" />
            <h2 className='product-title'>{name.slice(0,12)}</h2>
            <p className='price'>Price :{price}</p>
            <p><small>{description.slice(0,120)}</small></p>
            <button onClick={()=>hendeloParams(id)} className='shado btn btn-primary'>{name}</button>
           
        </div>
    );
};

export default Service;