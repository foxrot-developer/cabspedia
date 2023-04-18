import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { RiGooglePlayFill } from 'react-icons/ri';
import { GrAppleAppStore } from 'react-icons/gr';

import '../../assets/css/download-app.css';
import AppImg from '../../assets/images/app-img.png';

const DownloadApp = () => {
    return (
        <Container className='app-section mt-5'>
            <Row>
                <Col xs='12' lg='6'>
                    <h3 className='left-small-heading'>GET OUR APP</h3>
                    <h2 className='left-big-heading'>Download Our <span className='special-heading'>CabsPedia App</span> For Free</h2>
                    <div className='heading-divider'></div>
                    <p>There are many variations of passages available but the majority have suffered in some form going to use a passage by injected humour.</p>
                    <div>
                        <Button className='me-3'><RiGooglePlayFill className='app-icon' /> Google Play</Button>
                        <Button><GrAppleAppStore className='app-icon' /> App Store</Button>
                    </div>
                </Col>
                <Col xs='12' lg='6' data-aos="fade-left">
                    <Image fluid src={AppImg} alt='App' loading='lazy' />
                </Col>
            </Row>
        </Container>
    )
}

export default DownloadApp;
