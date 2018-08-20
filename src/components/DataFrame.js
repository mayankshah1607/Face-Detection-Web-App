import React from 'react';

const DataFrame = ({age,gender,origin}) => {
    return(
        <div>
            <div className='bg-white ma4'>
                <p className='fw3 f4'>Age</p>
                <p className='fw1 f6'>{age}</p>
                <p className='fw3 f4'>Gender</p>
                <p className='fw1 f6'>{gender}</p>
                <p className='fw3 f4'>Origin</p>
                <p className='fw1 f6'>{origin}</p>
            </div>
        </div>
    );
}

export default DataFrame;