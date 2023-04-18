import React from 'react';

import '../assets/css/custom-button.css';

const CustomButton = ({ children, ...props }) => {
    return (
        <button className='custom-btn' {...props}>{children}</button>
    )
}

export default CustomButton;
