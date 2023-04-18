import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

import CabsImg from '../../assets/images/available-cabs.png';
import ClientsImg from '../../assets/images/clients.png';
import DriversImg from '../../assets/images/drivers.png';
import TripsImg from '../../assets/images/trips.png';
import '../../assets/css/count-up.css';

const CounterUp = () => {
    return (
        <Container className='mt-5 counter-section'>
            <Row>
                <Col xs='12' md='6' lg='3' className='d-flex flex-column align-items-center justify-content-center'>
                    <Image fluid className='counter-img' src={CabsImg} />
                    <CountUp end={500} duration={5} suffix='+' className='counter-number' />
                    <h3>Available Cabs</h3>
                </Col>
                <Col xs='12' md='6' lg='3' className='d-flex flex-column align-items-center justify-content-center'>
                    <Image fluid className='counter-img' src={ClientsImg} />
                    <CountUp end={900} duration={5} suffix='+' className='counter-number' />
                    <h3>Happy Clients</h3>
                </Col>
                <Col xs='12' md='6' lg='3' className='d-flex flex-column align-items-center justify-content-center'>
                    <Image fluid className='counter-img' src={DriversImg} />
                    <CountUp end={700} duration={5} suffix='+' className='counter-number' />
                    <h3>Our Drivers</h3>
                </Col>
                <Col xs='12' md='6' lg='3' className='d-flex flex-column align-items-center justify-content-center'>
                    <Image fluid className='counter-img' src={TripsImg} />
                    <CountUp end={1800} duration={5} suffix='+' className='counter-number' />
                    <h3>Road Trip Done</h3>
                </Col>
            </Row>
        </Container>
    )
}

export default CounterUp;
