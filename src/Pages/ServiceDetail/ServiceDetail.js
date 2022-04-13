import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div className='text-center'>
            <h2>wellcome detaile{serviceId}</h2>
            <div>
                <Link to={'/checkout'}>
                    <button className='btn btn-primary'>proceed check</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;