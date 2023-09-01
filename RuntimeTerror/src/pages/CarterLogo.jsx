import React from 'react'

const CarterLogo =()=>{
    return(
        <div>
            <a href="/">
            <img src="data:image/png;base64,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"
            style={{ width: '250px', height: '90px' }}/>
            </a>
            </div>
        );
};
export default CarterLogo;