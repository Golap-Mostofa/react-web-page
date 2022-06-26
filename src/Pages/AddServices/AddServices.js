import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import added from '../../imges/banner/added.png'
const AddServices = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast(` product add success`)
            })
    };


    return (
        <div className='d-flex align-items-center justify-content-around margin'>
            <div className='blur' style={{ background: 'rgba(236 210 255)' }}>
            </div>
            <div>
                <h1 className='text-primary '>Please add a service</h1>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-4 w-100' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='mb-4 w-100' placeholder='Photo URL' type="text" {...register("img")} />
                    <input className='mb-4 w-100' placeholder='Price' type="number" {...register("price")} />
                    <textarea className='mb-4 w-100' placeholder='Description' {...register("description")} />
                    <div className='d-flex align-items-center justify-content-center'>
                        <input className=' btn btn-success' type="submit" value="Add Service" />
                    </div>
                </form>
            </div>
            <img src={added} alt="" />
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddServices;