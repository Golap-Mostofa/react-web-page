import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://infinite-waters-38341.herokuapp.com/product')
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