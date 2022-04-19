import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loadi = () => {
    return (
        <div>
            <Spinner style={{ weight: '400px' }} className="w-100 d-flex justify-center align-items-center " animation='border' variant='primary'></Spinner>
        </div>
    );
};

export default Loadi;