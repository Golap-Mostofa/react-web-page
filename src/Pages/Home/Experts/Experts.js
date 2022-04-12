import React from 'react';

import experts1 from '../../../imges/experts/experts-1.jpg';
import experts2 from '../../../imges/experts/experts-2.jpg';
import experts3 from '../../../imges/experts/experts-3.jpg';
import experts4 from '../../../imges/experts/experts-4.jpg';
import experts5 from '../../../imges/experts/experts-5.jpg';
import experts6 from '../../../imges/experts/experts-6.jpg';
import experts7 from '../../../imges/experts/experts-7.jpg';
import Expert from '../Expert/Expert';

const expatrs =[
    {id:1,name:"will smithe",img:experts1},
    {id:2,name:"will smith1",img:experts2},
    {id:3,name:"will smith2",img:experts3},
    {id:4,name:"will smith3",img:experts4},
    {id:5,name:"will smith4",img:experts5},
    {id:6,name:"will smith5",img:experts6},
    {id:7,name:"will smith6",img:experts7}
]
const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-center mt-5 '>our expatrs</h2>
            <div className="row">
                {
                    expatrs.map(expert=><Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;