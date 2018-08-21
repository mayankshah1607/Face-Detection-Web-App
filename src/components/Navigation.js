import React from 'react';
import 'tachyons';

const Navigation = () => {
    return(
        <nav style={{display:'flex',justifyContent:'flex-end', }}>
            <a href='https://github.com/mayankshah1607/Face-Detection-Web-App' style={{color: 'white'}} className="fw6 link dim pa3">View repository</a>
        </nav>
        
    );
}

export default Navigation;