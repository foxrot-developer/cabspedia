import React from 'react';

import '../assets/css/page-header.css';

const PageHeader = ({ children }) => {
    return (
        <div className='header-container'>
            <h2 className='page-header-title' data-aos="fade-up">{children}</h2>
        </div>
    )
}

export default PageHeader;
