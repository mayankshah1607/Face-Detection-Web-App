import React from 'react';
import 'tachyons';
import './ImageForm.css';

const ImageFrame = ({imgURL,age,gender,origin}) => {
    return(
        <div  className='centre pa4 bg-white br4'>
            <img alt='' src={imgURL} width='350px' height='auto'></img>
            
        </div>
    );
}

export default ImageFrame;



// <div className='centre'>
// <div className='centre'>
//     <div className='absolute mt2'>
//         <img alt='' src={imgURL} width='350px' height='auto'></img>
//         <p>{age}</p>
//     </div>
// </div>

// <div>
//     <p className='fw3 f4'>Age</p>
//     <p className='fw1 f6'>{age}</p>
//     <p className='fw3 f4'>Gender</p>
//     <p className='fw1 f6'>{gender}</p>
//     <p className='fw3 f4'>Origin</p>
//     <p className='fw1 f6'>{origin}</p>
// </div>
// </div>