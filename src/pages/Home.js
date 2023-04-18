import React from 'react';

import HomeTop from '../components/home/HomeTop';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Taxis from '../components/home/Taxis';
import Features from '../components/home/Features';
import Book from '../components/home/Book';
import DownloadApp from '../components/home/DownloadApp';
import Postcode from '../components/home/Postcode';

const Home = () => {
    return (
        <React.Fragment>
            <HomeTop />
            {/**<BookingForm />**/}
            {/**<About />**/}
            <Taxis />
            <Postcode />
            <Services />
            <Features />
            <Book />
            <DownloadApp />
        </React.Fragment>
    )
}

export default Home;
