import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/home-top.css';
import '../../assets/css/booking-form.css';

const HomeTop = () => {

    const navigate = useNavigate();

    return (
        <div className='banner-main-section w-100'>
            <Container>
                <Row className='align-items-center justify-content-start'>
                    <Col xs='12' lg='6' data-aos="fade-right">
                        <div className='booking-main'>
                            <h5 className='swift-quote'>Get A Swift Quote & Booking</h5>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Pickup Location</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Button className='btn-secondary my-3'>Add Via</Button>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Drop Off Location</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <div className='text-center'>
                                    <Button className='btn-primary me-2' onClick={() => navigate('/login')}>TAP INTO</Button>
                                    <Button className='btn-secondary' type='submit'>GET QUOTE</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeTop;
