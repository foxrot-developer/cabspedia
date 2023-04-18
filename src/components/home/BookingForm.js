import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

import '../../assets/css/booking-form.css';

const BookingForm = () => {
    return (
        <Container>
            <div className='booking-main'>
                <h4 className='text-warning'>BOOK YOUR RIDE</h4>
                <Form>
                    <Row>
                        <Col xs='12' md='6' lg='3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Pickup Location</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs='12' md='6' lg='3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Drop Off Location</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs='12' md='6' lg='3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Passengers</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col xs='12' md='6' lg='3'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Luggage</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col xs='12' md='6'>
                            <div className='col-4 toggler-section'>
                                <div className='theme-switch-wrapper me-3'>
                                    <label htmlFor='theme-switcher' className='theme-switch'>
                                        <input type='checkbox' id='theme-switcher' />
                                        <div className='slider round'></div>
                                    </label>
                                </div>
                                <p className='m-0 p-0'>Return</p>
                            </div>
                            <h6>One way</h6>
                            <div className='d-flex'>
                                <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="time" />
                                </Form.Group>
                            </div>
                        </Col>
                        <Col xs='12' md='6'>
                            <h6 className='mt-5'>Return</h6>
                            <div className='d-flex'>
                                <Form.Group className="mb-3 me-2" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="time" />
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <Button className='btn-lg btn-warning' type='submit'>GET QUOTE</Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default BookingForm;
