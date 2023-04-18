import React from 'react';

import PageHeader from '../shared/PageHeader';
import About from '../components/home/About';
import DownloadApp from '../components/home/DownloadApp';
import CountUp from '../components/about-us/CounterUp';

const AboutUs = () => {
    return (
        <React.Fragment>
            <PageHeader>ABOUT US</PageHeader>
            <About />
            <CountUp />
            <DownloadApp />
        </React.Fragment>
    )
}

export default AboutUs;
