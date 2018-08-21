import React from 'react';
import './ImageForm.css';
import 'tachyons';

const ImageForm = ({onTextChange, onButtonSubmit}) => {
    return(
        <div >
            
            <p className='fw6 f3 centre' style={{color:'white'}}>{'Demographical predictions using Machine Learning.'}</p><br/>
            <p className='fw6 f5 centre' style={{color:'white'}}>{'Continue by entering the URL of the person\'s image'}</p><br/>
                <div className='centre ba b--white bw3 br4 bg-white'>
                    <input className='f7 pa3 ba bw0 br4' type='text' onChange={onTextChange} placeholder='Enter image URL...'/>
                    <button onClick={onButtonSubmit} className='f7 fw6 grow ph3 br3 dib white bg-blue ba bw0'>Predict</button>
                </div>
            </div>
    );
}

export default ImageForm;
