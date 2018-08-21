import React from 'react';
import './ImageForm.css';
import 'tachyons';

const ImageForm = ({onTextChange, onButtonSubmit}) => {
    return(
        <div>
            
            <p className='fw6' style={{color:'white'}}>{'Choose an image to perform demographic classification.'}</p>
                <div className='centre mh4 ba b--white bw3 br4 bg-white'>
                    <input className='f5 pa3 ba bw0 br4' type='text' onChange={onTextChange} placeholder='Enter image URL...'/>
                    <button onClick={onButtonSubmit} className='f6 fw6 grow br4 ph4 dib white bg-light-red ba bw0'>Predict</button>
                </div>
            </div>
    );
}

export default ImageForm;
