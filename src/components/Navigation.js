import React from 'react';
import 'tachyons';

const Navigation = () => {
    return(
        <nav style={{display:'flex',justifyContent:'flex-end', }}>
            <a style={{color: 'white'}}href="#" className="fw6 link dim pa3">Sign Out</a>
        </nav>
    );
}

export default Navigation;