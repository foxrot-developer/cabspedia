import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import BookingImg from '../../assets/images/booking.png';
import TransportImg from '../../assets/images/transport.png';
import AirportImg from '../../assets/images/airport.png';
import BusinessImg from '../../assets/images/business.png';
import RegularImg from '../../assets/images/regular.png';
import TourImg from '../../assets/images/tour.png';

const Services = () => {

    const services = [
        { img: BookingImg, title: 'Online Booking', description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.' },
        { img: TransportImg, title: 'City Transport', description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.' },
        { img: AirportImg, title: 'Airport Transport', description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.' },
        { img: BusinessImg, title: 'Business Transport', description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.' },
        { img: RegularImg, title: 'Regular Transport', description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.' },
        { img: TourImg, title: 'Tour Transport', description: 'There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.' },
    ];

    return (
        <div className='section-bg mt-5 py-5 w-100'>
            <Container>
                <div className='text-center'>
                    <h3 className='left-small-heading'>SERVICES</h3>
                    <h2 className='left-big-heading'>Our <span className='special-heading'>Best Services</span> For You</h2>
                    <div className='heading-divider'></div>
                </div>

                <Row>
                    {services.map((service, index) => {
                        return <Col key={index} xs='12' md='6' lg='4' data-aos="fade-up">
                            <Card className='m-1 card-main'>
                                <Card.Img className='card-img' variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>
                                        {service.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Services;
