import React from 'react';
import 'tachyons';
import './ImageForm.css';
import Info from './Info';

const ImageFrame = ({imgURL,age,gender,origin}) => {
    return(
        <div  className='centre pa4 br4 ma4 bg-white flex items-center'>
            <div><img alt='' className='pr4'src={imgURL} width='200px' height='auto'></img></div>
            <Info age={age} gender={gender} origin={origin}/>
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