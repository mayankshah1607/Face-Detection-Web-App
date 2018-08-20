import React from 'react';
import './ImageForm.css';
import 'tachyons';

const ImageForm = () => {
    return(
        <div>
            <p className='fw3' style={{color:'white'}}>{'Choose an image to detect faces.'}</p>
                <div className='centre ba b--white bw3 br4 bg-white'>
                    <input className='f4 pa2 ba bw0 br4' type='text'/>
                    <button className='f6 fw6 grow br4 ph4 dib white bg-light-red ba bw0'>Detect</button>
                </div>
            </div>
    );
}

export default ImageForm;
