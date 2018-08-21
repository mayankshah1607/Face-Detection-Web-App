import React from 'react';
import 'tachyons';
import './Info.css';

const Info = ({age,gender,origin}) => { 
    return(
        <div className='flex items-center ph3 pb0'>
            <ul className="list pl0">
            <div className='fw8'>Age Appearance</div>
            <div className='fw4 mb4'>{age}</div>
            <div className='fw8'>Gender Appearance</div>
            <div className='fw4 mb4'>{gender}</div>
            <div className='fw8'>Cultural Appearance</div>
            <div className='fw4 mb4'>{origin}</div>
            </ul>
        </div>
    );


}

export default Info;