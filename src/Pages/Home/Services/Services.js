import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
<<<<<<< HEAD
        fetch('http://localhost:5000/product')
=======
        fetch('http://localhost:5000/service')
>>>>>>> 3c7d764ad2470c788beffc4f92e89e823134fc7a
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div id='Services' className='container'>
            <div className="row">
                <h3 className='services-title service-title'>Services Center</h3>
                <div className="services-container">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        >

                        </Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Services;