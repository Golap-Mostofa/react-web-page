import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useServic from '../../hooks/useServic';
const Manage = () => {
    const [services,setServices] = useServic()
    const Hdelete = id =>{
        const proseade = window.confirm('Are You Sure?')
        if(proseade){
            const url = `https://infinite-waters-38341.herokuapp.com/product/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaining = services.filter(servic=>servic._id !== id)
                setServices(remaining)
                toast('Delete success')
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-danger'>Manage Your service</h1>
            <hr />
            {
                services.map(service=><div key={service._id} >
                    <h2>{service.name} <button className='btn btn-danger' onClick={()=>Hdelete(service._id)}>X</button></h2>

                </div>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Manage;
